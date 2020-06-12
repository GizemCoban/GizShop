import { ADDRESS_PENDING, ADDRESS_FULFILLED, ADDRESS_REJECTED, ADDRESSLIST_PENDING, ADDRESSLIST_FULFILLED, ADDRESSLIST_REJECTED, UPDATEADDRESS_PENDING, UPDATEADDRESS_FULFILLED, UPDATEADDRESS_REJECTED, UPDATEADDRESSLIST_PENDING, UPDATEADDRESSLIST_FULFILLED, UPDATEADDRESSLIST_REJECTED,DELETEADDRESS_PENDING,DELETEADDRESS_FULFILLED,DELETEADDRESS_REJECTED } from './Address_action';
const initialState = {
    address: {},
    addressList: {},
    loading: false,
    reject: false,
    addressModal: true,
    UpdateAddress:{},
    UpdateAddressList:{},
    DeleteAddress:{}
}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case ADDRESS_PENDING:
            return {
                ...state,
                loading: true,
                addressModal: false,
                address:{}
            }
        case ADDRESS_FULFILLED:
            return {
                ...state,
                address: action.payload,
                UpdateAddress:{},
                UpdateAddressList:{},
                DeleteAddress:{},
                loading: false,
                addressModal: true,
            }
        case ADDRESS_REJECTED:
            return {
                ...state,
                loading: false,
                reject: true,
                addressModal: false,
                address:{}
            }
        case ADDRESSLIST_PENDING:
            return {
                ...state,
                loading: true,
                addressModal: false,
                DeleteAddress:{}
            }
        case ADDRESSLIST_FULFILLED:
            return {
                ...state,
                addressList: action.payload,
                loading: false,
                addressModal: false,
                DeleteAddress:{}
            }
        case ADDRESSLIST_REJECTED:
            return {
                ...state,
                loading: false,
                reject: true,
                addressModal: false,
                DeleteAddress:{}
            }
        case  UPDATEADDRESS_PENDING:
            return {
                ...state,
                loading: false,
                reject: true,
                UpdateAddress:{},
            }
        case UPDATEADDRESS_FULFILLED:
            return{
                ...state,
                loading:false,
                reject:true,
                UpdateAddress:action.payload,
                UpdateAddressList:{}

            }
        case UPDATEADDRESS_REJECTED:
            return{
                ...state,
                loading:false,
                reject:true,
                UpdateAddress:{},
            }
        case UPDATEADDRESSLIST_PENDING:
            return{
                ...state,
                loading:false,
                reject:true,
                UpdateAddress:{},
                UpdateAddressList:{},
            }
        case UPDATEADDRESSLIST_FULFILLED:
            return{
                ...state,
                UpdateAddressList:action.payload,
                loading:false,
                UpdateAddress:{},
                reject:false,
            }
        case UPDATEADDRESSLIST_REJECTED:
            return{
                ...state,
                loading:false,
                reject:true,
                UpdateAddressList:{},
                UpdateAddress:{},
            }
            case DELETEADDRESS_PENDING:
                return{
                    ...state,
                    loading:false,
                    reject:true,
                    UpdateAddress:{},
                    UpdateAddressList:{},
                }
            case DELETEADDRESS_FULFILLED:
                return{
                    ...state,
                    DeleteAddress:action.payload,
                    loading:false,
                    UpdateAddress:{},
                    UpdateAddressList:{},
                    reject:false,
                }
            case DELETEADDRESS_REJECTED:
                return{
                    ...state,
                    loading:false,
                    reject:true,
                    UpdateAddressList:{},
                    UpdateAddress:{},
                }


        default:
            return state;
    }
}
