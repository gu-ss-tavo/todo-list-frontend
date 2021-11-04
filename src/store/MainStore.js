import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import { task_reducer } from '../reducers/taskReducer';

// ! TODO: temporary, for development mode only
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// ? combine
const reducers = combineReducers({
    tasks_reducer: task_reducer,
});

// ? store with middleware
export const store = createStore(reducers, composeEnhancers(
    applyMiddleware(
        thunk
    )
));