import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import posts from './reducers/posts';
import currentID from './reducers/currentID';
import auth from './reducers/auth';
import serverMessages from './reducers/serverMessages';


const reducers = combineReducers({
    posts,
    currentID,
    auth,
    serverMessages
})

const store = configureStore({
        reducer: reducers,
        middleware: [thunk]
    }
);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>

export default store;




