import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    USER_LOADED_SUCCESS,
    USER_LOADED_FAIL,
    AUTHENTICATED_SUCCESS,
    AUTHENTICATED_FAIL,
    PASSWORD_RESET_FAIL,
    PASSWORD_RESET_SUCCESS,
    PASSWORD_RESET_CONFIRM_FAIL,
    PASSWORD_RESET_CONFIRM_SUCCESS,
    SIGNUP_FAIL,
    SIGNUP_SUCCESS,
    ACTIVATION_SUCCESS,
    ACTIVATION_FAIL,
    LOGOUT,
    GET_TEST_SUCCESS,
    GET_TEST_FAIL,
} from '../actions/types';

const initialState = {
    access: localStorage.getItem('access'),
    refresh: localStorage.getItem('refresh'),
    isAuthenticated: null,
    user: null
};

export default function(state = initialState, action) {
    const { type, payload } = action;

    switch(type) {
        case AUTHENTICATED_SUCCESS:
            return {
                ...state,
                isAuthenticated: true
            }

        case AUTHENTICATED_FAIL:
            return {
                ...state,
                isAuthenticated: false
            }

        case LOGIN_SUCCESS:
            localStorage.setItem('access', payload.access);

            return {
                ...state,
                access: payload.access,
                refresh: payload.refresh,
                isAuthenticated: true
            }
        
        case SIGNUP_SUCCESS:
            return {
                ...state,
                isAuthenticated: false
            }
        
        case USER_LOADED_SUCCESS:
            return {
                ...state,
                user: payload
            }
        
        case USER_LOADED_FAIL:
            return {
                ...state,
                user: null
            }

        // login fail and logout are the same
        case LOGIN_FAIL:
        case LOGOUT:
        case SIGNUP_FAIL:
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');

            return {
                ...state,
                access: null,
                refresh: null,
                isAuthenticated: false,
                user: null
            }

        case GET_TEST_SUCCESS:
        case GET_TEST_FAIL:
        case PASSWORD_RESET_SUCCESS:
        case PASSWORD_RESET_FAIL:
        case PASSWORD_RESET_CONFIRM_SUCCESS:
        case PASSWORD_RESET_CONFIRM_FAIL:
        case ACTIVATION_SUCCESS:
        case ACTIVATION_FAIL:
            return {
                ...state
            }

        default:
            return state
    }
}