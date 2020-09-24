/*
 * Created on Mon Jul 27 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */

import { Actions } from '../types';


export const loginUser = (user) => ({
    type: Actions.LOGIN_USER,
    payload: user
});


export const getUser = auth => (dispatch, getState) => {
    //console.log("Dispatching this");
    //console.log(auth);
    //dispatch({ type: Actions.LOGIN_USER, payload: { token: { ...auth }, profile: { ...response.data } } });

}