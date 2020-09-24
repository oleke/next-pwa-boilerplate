/*
 * Created on Fri Jul 24 2020
 *
 * Author: Ogunleke Abiodun
 * Copyright (c) 2020 ALLOFFT Inc
 */
import { Actions } from '../types';
import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
    token: null,
    profile: null,
    privacy: true,
    settings: null,
    errors: {
        login: null,
        signup: null,
        update: null,
    },
};


const userReducer = (state = initialState, action) => {
    
    switch (action.type) {
        /*case "persist/REHYDRATE": {
            const nextState = {
                ...state, // use previous state
                ...action.payload, // apply delta from hydration
              }
              if (state.profile && state.token){
                nextState.profile = state.profile;
                nextState.token = state.token;
              } // preserve count value on client side navigation
              return nextState
        }
        case HYDRATE:{
            const nextState = {
                ...state, // use previous state
                ...action.payload, // apply delta from hydration
              }
              if (state.profile && state.token){
                nextState.profile = state.profile;
                nextState.token = state.token;
              } // preserve count value on client side navigation
              return nextState
        };*/
 
        case Actions.LOGIN_USER: {
            //console.log(action.payload);
            return {...state,token:action.payload.token,profile:action.payload.profile}
        };

        case Actions.SIGNUP_USER: {
            return {...state,token:action.payload.token,profile:action.payload.profile}
        };

        case Actions.LOGIN_USER_ERROR: {
            //console.log(action.payload);
            return {...state, errors:{...state.errors,login:action.payload}};
        };

        case Actions.SIGNUP_USER_ERROR: {
            return {...state, errors:{...state.errors,signup:action.payload}};
        };
        
        case Actions.UPDATE_PROFILE_PICTURE: {
            return {...state,profile:{...state.profile,profile_details:{...state.profile.profile_details,profile_picture:action.payload}}}
        };

        case Actions.UPDATE_USER_ERROR:{
            return {...state, errors:{...state.errors,update:action.payload}};
        }

        case Actions.UPDATE_USER_LANGUAGE:{
            return {...state,profile:{...state.profile,profile_details:{...state.profile.profile_details,current_language:action.payload}}}
        }

        case Actions.UPDATE_USER_USERNAME:{
            console.log("Here",action.payload);
            return {...state,profile:{...state.profile,username:action.payload}}
        }

        case Actions.UPDATE_USER_LEVEL:{
            return {...state,profile:{...state.profile,stats:{...state.profile.stats,level:action.payload}}}
        }

        case Actions.UPDATE_USER_PRIVACY:{
            return {...state,privacy:action.payload}
        }

        case Actions.UPDATE_USER_TONGUE:{
            return {...state,profile:{...state.profile,profile_details:{...state.profile.profile_details,mother_language:action.payload}}}
        }

        case Actions.LOGOUT_USER:{
            return {...state,profile:undefined,token:undefined};
        }

        case Actions.ADD_VOCABULARY:{
            return {...state,profile:{...state.profile,learning:{...state.profile.learning,vocab_list:[...state.profile.learning.vocab_list, ...action.payload]}}}
        }

        case Actions.UPDATE_USER_COURSE:{
            return {...state,profile:{...state.profile,learning:{...state.profile.learning,courses:[...state.profile.learning.courses, {course:action.payload,completion:[],voice_preference: undefined}]}}}
        }

        case Actions.UPDATE_USER_CHALLENGE:{
            return {...state,profile:{...state.profile,learning:{...state.profile.learning,challenges:[...state.profile.learning.challenges, action.payload]}}}
        }

        case Actions.UPDATE_USER_WELCOME:{
            return {...state,profile:{...state.profile,profile_details:{...state.profile.profile_details,current_language:action.payload.lang,mother_language:action.payload.tongue}}}
        }

        case Actions.VERIFY_USER:{
            return{...state, token:{...state.token, email_verified: true}}
        }

        default:
            return state;
    }
};
export default userReducer;
