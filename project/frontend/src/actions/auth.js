import axios from 'axios'
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
    ACTIVATION_FAIL,
    ACTIVATION_SUCCESS,
    LOGOUT,
    GET_TEST_FAIL,
    GET_TEST_SUCCESS,
} from './types';

export const checkAuthenticated = () => async dispatch => {
    if (localStorage.getItem('access')) {

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }

        const body = JSON.stringify({ token: localStorage.getItem('access') })

        try {
            // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/jwt/verify/`, body, config)
            const res = await axios.post(`/auth/jwt/verify/`, body, config)

            // if not get this code, then it means it's valid
            if (res.data.code !== 'token_not_valid') {

            } else {
                dispatch ({
                    type: AUTHENTICATED_SUCCESS
                })
            }
    
        } catch (err) {
            dispatch({
                type: AUTHENTICATED_FAIL
            })
        }
        
    } else {
        dispatch({
            type: AUTHENTICATED_FAIL
        })
    }
}

export const load_user = () => async dispatch => {
    if (localStorage.getItem('access')) {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization':`JWT ${localStorage.getItem('access')}`,
                'Accept': 'application/json'
            }
        }

        try {
            // const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/users/me/`, config);
            const res = await axios.get(`/auth/users/me/`, config);


            dispatch({
                type: USER_LOADED_SUCCESS,
                payload: res.data
            })
        } catch (err) {
            dispatch({
                type: USER_LOADED_FAIL
            })
        } 
    } else {
        dispatch({
            type: USER_LOADED_FAIL
        })
    }
};

export const display_user = () => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        // const res = await axios.get(`${process.env.REACT_APP_API_URL}/appexample/list-user-view/`, config);
        const res = await axios.get(`/appexample/list-user-view/`, config);

        dispatch({
            type: GET_TEST_SUCCESS,
            payload: res.data
        })

    } catch (err) {
        dispatch({
            type: GET_TEST_FAIL
        })
    } 
};

// export const display_user = () => async dispatch => {
//     if (localStorage.getItem('access')) {
//         const config = {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization':`JWT ${localStorage.getItem('access')}`,
//                 'Accept': 'application/json'
//             }
//         }

//         try {
//             const res = await axios.get(`${process.env.REACT_APP_API_URL}/appexample/list-user-view/`, config);

//             dispatch({
//                 type: GET_TEST_SUCCESS,
//                 payload: res.data
//             })

//         } catch (err) {
//             dispatch({
//                 type: GET_TEST_FAIL
//             })
//         } 
//     } else {
//         dispatch({
//             type: GET_TEST_FAIL
//         })
//     }
// };

export const login = (email, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try {
        //${process.env.REACT_APP_API_URL}
        const res = await axios.post(`/auth/jwt/create/`, body, config);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(load_user())

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL
        })
    }
};

// function getCookie(cname) {
//     let name = cname + "=";
//     let decodedCookie = decodeURIComponent(document.cookie);
//      let ca = decodedCookie.split(';');
//      for(let i = 0; i <ca.length; i++) {
//       let c = ca[i];
//      while (c.charAt(0) == ' ') {
//         c = c.substring(1);
//         }
//       if (c.indexOf(name) == 0) {
//        return c.substring(name.length, c.length);
//        }
//      }
//     return "";
//    }
   
export const signup = (email, user_name, password, re_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email, user_name, password, re_password })

    try {
        // const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/`, body, config);
        const res = await axios.post(`/auth/users/`, body, config);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })


    } catch (err) {
        dispatch({
            type: SIGNUP_FAIL
        })
    }
};

// verifying account through email
export const verify = (uid, token) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ uid, token })

    try {
        // await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/activation/`, body, config);
        await axios.post(`/auth/users/activation/`, body, config);

        dispatch({
            type: ACTIVATION_SUCCESS
        })


    } catch (err) {
        dispatch({
            type: ACTIVATION_FAIL
        })
    }
}

export const reset_password = (email) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ email })

    try {
        // await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password/`, body, config)
        await axios.post(`/auth/users/reset_password/`, body, config)

        dispatch({
            type: PASSWORD_RESET_SUCCESS
        })

    } catch (err) {

        dispatch({
            type: PASSWORD_RESET_FAIL
        })

    }
}

export const reset_password_confirm = (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ uid, token, new_password, re_new_password })

    try {
        // await axios.post(`${process.env.REACT_APP_API_URL}/auth/users/reset_password_confirm/`, body, config)
        await axios.post(`/auth/users/reset_password_confirm/`, body, config)

        dispatch({
            type: PASSWORD_RESET_CONFIRM_SUCCESS
        })

    } catch (err) {

        dispatch({
            type: PASSWORD_RESET_CONFIRM_FAIL
        })

    }

}

export const logout = () => dispatch => {
    dispatch({
        type: LOGOUT
    })
}