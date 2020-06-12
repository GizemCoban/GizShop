import axios from 'axios';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_FULFILLED = 'LOGIN_FULFILLED';
export const LOGIN_REJECTED = 'LOGIN_REJECTED';

export const REGISTER_PENDING = 'REGISTER_PENDING';
export const REGISTER_FULFILLED = 'REGISTER_FULFILLED';
export const REGISTER_REJECTED = 'REGISTER_REJECTED';


export function loginCheck( login ) {
    return dispatch => {
        dispatch({
            type : 'LOGIN',
            payload : axios.post('http://localhost:4000/people/login', login)
        })

    }
}



export function registerCheck( register ) {
    return dispatch => {
        dispatch({
            type : 'REGISTER',
            payload : axios.post('http://localhost:4000/people/addUser', register)
        })

    }
}


