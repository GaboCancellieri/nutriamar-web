import { useRef, useCallback, Reducer } from "react";
import isFunction from "lodash/isFunction";
import getReducerDefaultState from "../utils/getReducerDefaultState";
import defaultInitializer from "../utils/defaultInitializer";
import getDerivedStateFromProps from "../utils/getDerivedStateFromProps";
import useSetStateReducer from "./useSetStateReducer";
import useLazyMemo from "./useLazyMemo";
import useEffectAfterMount from "./useEffectAfterMount";
import usePropsThatChanged from "./usePropsThatChanged";

export type AugmentedDispatch = Object | Function;

/**
 * Augments React's useReducer() hook
 * so that the action dispatcher supports thunks.
 */
const useReducerWithThunk = <S = any>(
  reducer: Reducer<S, any>,
  initialState = getReducerDefaultState(reducer),
  initializer = defaultInitializer,
  derivedStateFromProps?: any
) => {
  // Only keep the props that changed to override the state
  const derivedStateFromPropsThatChanged = usePropsThatChanged(
    derivedStateFromProps
  );

  // Get initial hook state once
  const initialHookState = useLazyMemo(
    useCallback(
      () =>
        getDerivedStateFromProps(
          initialState,
          derivedStateFromPropsThatChanged
        ),
      []
    )
  );

  const [hookState, setHookState] = useSetStateReducer(
    initialHookState,
    initializer
  );

  // State management
  const state = useRef<S>(hookState);

  const getState: () => S = useCallback(() => state.current, [state]);

  const setState = useCallback(
    (newState: S, callback?: (currentState: S) => void) => {
      const derivedState = getDerivedStateFromProps(
        newState,
        derivedStateFromPropsThatChanged
      );
      state.current = derivedState;
      setHookState(derivedState, callback);
    },
    [derivedStateFromPropsThatChanged, setHookState]
  );

  // make the state controlled from an HOC by passing derivedStateFromPropsThatChanged
  useEffectAfterMount(() => {
    setState(state.current);
  }, [derivedStateFromPropsThatChanged]);

  // Reducer
  const reduce = useCallback(
    (action: Object) => reducer(getState(), action),
    [reducer, getState]
  );

  // Augmented dispatcher
  const dispatch = useCallback(
    (action: AugmentedDispatch, callback?: (currentState: S) => void) => {
      if (isFunction(action)) {
        return action(dispatch, getState);
      }
      const newState = reduce(action);
      return setState(newState, callback);
    },
    [reduce, getState, setState]
  );

  return [hookState as S, dispatch];
};

export default useReducerWithThunk;
