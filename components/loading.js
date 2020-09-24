/*
 * Created on Tue Jul 21 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */

 /*
 * Loading GIF component
 */
import React from 'react';

function Loading(props){

    let message;
    if(props.alert){
        message = props.alert;
    }
    return (
        <div id="loading">
            <div className="logo"></div>
            {message}
        </div>
    );
}

export default Loading;