import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import posts from './reducers/posts';

const reducers = combineReducers({
    posts
})

const store = configureStore({
        reducer: reducers,
        middleware: [thunk]
    }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;




