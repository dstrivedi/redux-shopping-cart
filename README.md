## Redux

## react-redux

1. **Actions**: Define action types and action creators.
2. **Reducer**: Handle state changes based on actions.
3. **Store**: Create a Redux store with the reducer.
4. **Provider**: Wrap your app with Provider to pass the store.
5. **Components**: Use useSelector to get state and useDispatch to dispatch actions.

**Purpose**:

**React-Redux** is a library that provides bindings to connect React components with a Redux store. It allows React components to interact with the Redux store, enabling them to read from and dispatch actions to the store.

Key Features:
Provider Component: Makes the Redux store available to all nested components via React context.
useSelector Hook: Selects and returns a part of the state from the Redux store.
useDispatch Hook: Provides a function to dispatch actions to the Redux store.
connect Function: Higher-order component (HOC) to connect React components to the Redux store.

## redux-toolkit

1. **Slice Creation (counterSlice.js)**
Defines actions and reducers in one place.
Provides an initial state and reducers to handle state changes.

2. **Store Configuration (store.js)**
Sets up the Redux store and integrates the reducer.

3. **Provider Setup (index.js)**
Wraps the app with the Redux Provider to pass the store to React components.

4. **React Components (App.js)**
Uses useSelector to access state and useDispatch to dispatch actions.

Purpose:

**Redux Toolkit** is an official library that simplifies the process of writing Redux logic.
It provides utilities to help with the common tasks in Redux, such as creating slices, configuring the store, and handling asynchronous logic.

Key Features:
createSlice: Simplifies the creation of reducers and actions by defining them in a single place.
configureStore: Simplifies store setup with default middleware and DevTools integration.
createAsyncThunk: Helps with handling asynchronous actions (e.g., data fetching) in a more manageable way.
createReducer and createAction: Simplifies creating reducers and actions.
RTK Query: An advanced data fetching and caching tool integrated with Redux Toolkit.


