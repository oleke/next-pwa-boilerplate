/*
 * Created on Thu Jul 23 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */

import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';
import React from 'react';
import { IconButton } from '@material-ui/core';

export default function Logger(props) {
    const message = props.message;
    const severity = props.severity || "error";
    const action = (severity === "error") ? "" : <IconButton
        aria-label="close"
        color="inherit"
        size="small"
        onClick={() => {
            setOpen(false);
        }}
    >
        <CloseIcon fontSize="inherit" />
    </IconButton>
    const [open, setOpen] = React.useState(true);


    return (
        <div className={props.className}>
            <Collapse in={open}>
                <Alert severity={severity} action={action}> {message} </Alert>
            </Collapse>
        </div>
    );
}