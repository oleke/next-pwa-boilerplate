/*
 * Created on Fri Sep 18 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */


const withPWA = require('next-pwa')
 //
module.exports = withPWA({
  pwa: {
    disable: process.env.NODE_ENV === 'development' ,
    dest: 'public',
    register: true,
  }
});