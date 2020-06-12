import { ACCOUNTINFO_PENDING, ACCOUNTINFO_FULFILLED, ACCOUNTINFO_REJECTED, UPDATEACCOUNTINFO_PENDING, UPDATEACCOUNTINFO_FULFILLED, UPDATEACCOUNTINFO_REJECTED, UPDATEPASSWORD_PENDING, UPDATEPASSWORD_FULFILLED, UPDATEPASSWORD_REJECTED } from './Accountinfo_action';


const initialState = {
    loading: false,
    reject: false,
    UpdateAccountinfoList: {},
    UpdateAccountinfo: {},
    UpdatePassword:{},


}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ACCOUNTINFO_PENDING:
            return {
                ...state,
                loading: true,

                UpdateAccountinfoList:{}
            }
        case ACCOUNTINFO_FULFILLED:
            return {
                ...state,
                UpdateAccountinfoList: action.payload,

                loading: false,
                addressModal: false,
            }
        case ACCOUNTINFO_REJECTED:
            return {
                ...state,
                loading: false,
                reject: true,
                UpdateAccountinfoList:{}

            }
        case UPDATEACCOUNTINFO_PENDING:
            return {
                ...state,
                loading: true,
                UpdateAccountinfoList:{},
                UpdateAccountinfo:{}
            }
        case UPDATEACCOUNTINFO_FULFILLED:
            return {
                ...state,

                loading: false,
                UpdateAccountinfo: action.payload,
                UpdateAccountinfoList: {}
            }
        case UPDATEACCOUNTINFO_REJECTED:
            return {
                ...state,
                loading: false,
                reject: true,
                UpdateAccountinfoList:{},
                UpdateAccountinfo: {}

            }
        case UPDATEPASSWORD_PENDING:
            return {
                ...state,
                loading: true,
                UpdateAccountinfoList:{},
                UpdateAccountinfo:{},
                UpdatePassword:{}

            }
        case  UPDATEPASSWORD_FULFILLED:
            return {
                ...state,

                loading: false,
                UpdatePassword: action.payload,
                UpdateAccountinfoList: {},
                UpdateAccountinfo:{}

            }
        case UPDATEPASSWORD_REJECTED:
            return {
                ...state,
                loading: false,
                reject: true,
                UpdateAccountinfoList:{},
                UpdateAccountinfo:{},
                UpdatePassword:{}

            }


        default:
            return state;
    }
}
