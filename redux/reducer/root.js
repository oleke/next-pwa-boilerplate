/*
 * Created on Tue Jun 30 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */


import userReducer from './userReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;