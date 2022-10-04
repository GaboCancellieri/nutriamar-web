/**
 * A JavaScript map that has a string as it's key and any as it's value
 * @typedef {object.<string, *>} StringMap
 */
/**
 * The state for a store's reducer
 * @typedef {StringMap} ReducerState
 */
/**
 * A React.Component, React.PureComponent, or React.FC props
 * @typedef {StringMap} ComponentProps
 */

/**
 * @typedef {object} ContexStoreProps
 * @property {string|number=} name - the unique name of the ContextStore
 * @property {React.Context} context - allows you to supply
 * a custom context instance to be used by resurrection.
 * You need to pass the instance of your context
 * to both <ContextProvider /> and your connected component.
 * You may pass the context to your connected component either
 * by passing it here as a field of option, or as a prop to your connected component in rendering.
 * @property {function|object.<string, Reducer>=} reducers - first object to compare
 * @property {object.<string, *>=} initialState - the initial state of the reducer
 * @property {object.<string, *>=} props - passed from an HOC that controls
 * the state of the store use this if you want prop changes to overwrite the state
 * @property {ReducerStateInitializer} initializer - sets the initial state of the reducer
 * @property {ReactNode} children - the child components that will consume the store
 */

/**
 * @typedef {object} MapDispatchToPropsArray
 * @property {string} name - the name of the function
 * @property {function} action - the action to be wrapped in the dispatch API
 */

/**
 * Connects a Component to one or more context stores
 * @typedef {object} ConnectOptions
 * @property {MapStateToProps=} mapStateToProps - A callback used when there is only one stateContext
 * @property {React.conext|object.<string, React.context>|object.<string, object.array<MapDispatchToPropsArray>>} mapDispatchToProps - The conext that holds a reducers dispatch API
 * @property {boolean=} pure - when options.pure is true,
 * connect performs several equality checks that are used to avoid unnecessary calls to
 * mapStateToProps,
 * mapDispatchToProps,
 * mergeProps,
 * and ultimately to render.
 * While the defaults are probably appropriate 99% of the time,
 * you may wish to override them with custom implementations for performance or other reasons.
 * @property {
 * function (
 * stateToProps: ComponentProps,
 * dispatchToProps: ComponentProps,
 * ownProps: ComponentProps) => ComponentProps=} mergeProps - The final merge of all props
 * @property {function(prevProps: ComponentProps, nextProps: ComponentProps) => boolean=} areMergedPropsEqual - when pure, compares the result of mergeProps
 * to its previous value.
 * areOwnPropsEqual: (next: object, prev: object) => boolean
 * areMergedPropsEqual: (next: object, prev: object) => boolean
 * */

/**
 * @callback Dispatch
 * @param {object|Thunk} action
 * @returns {void|*}
 */

/**
 * @callback Thunk
 * @param {Dispatch} dispatch
 * @param {function(): object} getState
 * @returns {void|*}
 */

/**
 * @callback GetReducerState
 * @returns {ReducerState}
 */

/**
 * @typedef {object} ReducerAction
 * @property {string} action - the action type
 * @property {*} payload - the action payload
 */

/**
 * @callback GetStateCallback
 * @param {ReducerState} state - Reducer state passed back
 * @return {ReducerState}
 */

/**
 * @callback Action
 * @param {array.<*>} args - arguments to the action
 * @returns {ReducerAction}
 */

/**
 * @callback ThunkAction
 * @param {Thunk} dispatch
 * @param {GetReducerState} getState
 * @returns {*}
 */

/**
 * @callback ThunkActionDispatch
 * @param {*} args - arguments to the action
 * @returns {Action|ThunkAction}
 */

/**
 * @callback Reducer
 * @param {ReducerState=} state
 * @param {ReducerAction} action
 * @returns {ReducerState}
 */

/**
 * @typedef {object.<string, Reducer>} CombinedReducers
 */

/**
 * @callback MapStateToProps
 * @param {ReducerState} state - the reducer's state
 * @param {object.<string, *>} ownProps - the components own props passed from an HOC
 * @return {ComponentProps}
 */

/**
 * @callback MapDispatchToProps
 * @param {function(dispatch: Thunk): Action|object.<string, ThunkActionDispatch>} dispatch
 * @return {Action|ThunkActionDispatch}
 */

/**
 * @callback MergeProps
 * @param {ComponentProps} stateToProps - returned value of mapStateToProps
 * @param {Action|ThunkActionDispatch} dispatchToProps - returned value of mapDispatchToProps
 * @param {ComponentProps} ownProps - components own props
 */

/**
 * Determines if the selector's returned value should be recomputed
 * @callback SelectorEqualityFunction
 * @param {*} nextSelector - the next selected state
 * @param {*} previousSelector - the prev selected state
 * @return {boolean} - whether the two selected states are equal
 */

/**
 * Similar to mapStateToProps but allows an equality function as the second argument
 * @callback MapStateToSelector
 * @param {function(state: ReducerState): ComponentProps} mapStateToSelector - callback
 * @param {SelectorEqualityFunction} isEqual - callback
 * @return {ComponentProps}
 */

/**
 * Callback that initializes a reducer's state
 * @callback ReducerStateInitializer
 * @param {ReducerState|ComponentProps} stateOrProps - state or props
 * @return {ReducerState}
 */

/**
 * @callback SetState
 * @param {ReducerState} updater - The state to be updated
 * @param {function=} callback - A callback function that is called after the state is updated
 * @return {void}
 */

/**
 * @typedef {object} StoreProvider
 * @property {React.context} stateContext
 * @property {ReducerState=} stateProviderValue - Optionally control the StateContext.Provider value from an HOC
 * @property {Reducer=} reducer
 * @property {ReducerState=} initialState
 * @property {ReducerStateInitializer=} initializer
 * @property {ReducerState=} derivedStateFromProps - Optional control the reducers state from an HOC
 * @property {React.context=} dispatchContext
 * @property {Dispatch=} dispatchProviderValue - Optionally control the DispatchContext.Provider value from an HOC
 * @property {GetStateCallback=} getStateValue - A callback to format the stateContext.Provider value
 * @property {ReactNode} children
 */
