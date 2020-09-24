/*
 * Created on Tue Jun 30 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */

import { createStore, applyMiddleware,Store } from 'redux';
import {createWrapper} from 'next-redux-wrapper';
import rootReducer from './reducer/root';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';




//const sagaMiddleware = createSagaMiddleware();
const middleware = [thunk];



// create a store for client & server side rendering
const initializeStore = initialState => {
    let store;
    const isClient = typeof window !== 'undefined';

    if (isClient) {
        
        const { persistReducer } = require('redux-persist');
        const storage = require('redux-persist/lib/storage').default;

        const persistConfig = {
            key: 'root-esom',
            whitelist:["user","module"],
            storage
        };

        store = createStore(
            persistReducer(persistConfig, rootReducer),
            initialState,
            composeWithDevTools(applyMiddleware(...middleware))
        );
        //console.log("Client 0");
        store.__persistor = persistStore(store);
        //console.log(store.__PERSISTOR)
    }
    else { //Server side rendering no persistence
        
        store = createStore(
            rootReducer,
            initialState,
            composeWithDevTools(applyMiddleware(...middleware))
        );
    }
    //store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

// export an assembled wrapper
export const wrapper = createWrapper(initializeStore, {debug: true});
//export default initializeStore;

export const persistor = persistStore(initializeStore());
