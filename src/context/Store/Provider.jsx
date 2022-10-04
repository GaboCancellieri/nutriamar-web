import React from 'react';
import PropTypes from 'prop-types';
import useReducerWithThunk from './hooks/useReducerWithThunk';
import setStateReducer from './reducers/setStateReducer';
import defaultInitializer from './utils/defaultInitializer';

/**
 * The Store Provider that wraps it's children in a DispatchContext.Provider and StateContext.Provider
 * @typedef {React.FC}
 * @param {StoreProvider} ProviderProps - The props of the component
 * @returns {ReactNode} - The dispatch and state context providers that wrap the children
 */
const Provider = ({
  id,
  stateContext: StateContext,
  stateProviderValue,
  reducer,
  // eslint-disable-next-line no-underscore-dangle
  initialState = stateProviderValue ?? StateContext?._currentValue,
  initializer,
  derivedStateFromProps,
  dispatchContext: DispatchContext,
  dispatchProviderValue,
  children,
}) => {
  const [state, dispatch] = useReducerWithThunk(reducer, initialState, initializer, derivedStateFromProps);

  const StateContextProvider = (
    <StateContext.Provider
      value={stateProviderValue ?? state}
      displayName={`${StateContext.displayName}${id ? `-${id}` : ''}`}
    >
      {children}
    </StateContext.Provider>
  );

  return DispatchContext ? (
    <DispatchContext.Provider value={dispatchProviderValue ?? dispatch} displayName={DispatchContext.displayName}>
      {StateContextProvider}
    </DispatchContext.Provider>
  ) : (
    StateContextProvider
  );
};

Provider.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stateContext: PropTypes.object.isRequired,
  stateProviderValue: PropTypes.object,
  derivedStateFromProps: PropTypes.object,
  reducer: PropTypes.func,
  initialState: PropTypes.object,
  initializer: PropTypes.func,
  dispatchContext: PropTypes.object,
  dispatchProviderValue: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};

Provider.defaultProps = {
  id: '',
  reducer: setStateReducer,
  stateProviderValue: undefined,
  derivedStateFromProps: undefined,
  initialState: undefined,
  dispatchContext: undefined,
  initializer: defaultInitializer,
  dispatchProviderValue: undefined,
  children: null,
};

export default Provider;
