import { LOGIN_PENDING, LOGIN_FULFILLED, LOGIN_REJECTED,REGISTER_PENDING,REGISTER_FULFILLED,REGISTER_REJECTED } from './action';

const initialState = {
    user: {},
    loading: false,
    reject: false
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case LOGIN_PENDING:
            return {
                ...state,
                loading : true,
                user: {},
            }
        case LOGIN_FULFILLED:
            return {
                ...state,
                user : action.payload,
                loading : false,
            }
        case LOGIN_REJECTED:
            return {
                ...state,
                loading : false,
                reject: true,
                user: {},
            }
            case REGISTER_PENDING:
            return {
                ...state,
               loading : true,
               user: {},
            }
            case REGISTER_FULFILLED:
            return {
                ...state,
                user : action.payload,
                loading : false,
            }
        case REGISTER_REJECTED :
            return {
                ...state,
                loading : false,
                reject: true,
                user: {},
            }
        default:
            return state;
    }
}

