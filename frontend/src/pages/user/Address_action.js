import axios from 'axios';
import AddressList from './AddressList';
export const ADDRESS_PENDING = 'ADDRESS_PENDING';
export const ADDRESS_FULFILLED = 'ADDRESS_FULFILLED';
export const ADDRESS_REJECTED = 'ADDRESS_REJECTED';
export const ADDRESSLIST_PENDING = 'ADDRESSLIST_PENDING';
export const ADDRESSLIST_FULFILLED = 'ADDRESSLIST_FULFILLED';
export const ADDRESSLIST_REJECTED = 'ADDRESSLIST_REJECTED';
export const UPDATEADDRESS_PENDING='UPDATEADDRESS_PENDING';
export const UPDATEADDRESS_FULFILLED='UPDATEADDRESS_FULFILLED';
export const UPDATEADDRESS_REJECTED='UPDATEADDRESS_REJECTED';
export const UPDATEADDRESSLIST_PENDING='UPDATEADDRESSLIST_PENDING';
export const UPDATEADDRESSLIST_FULFILLED='UPDATEADDRESSLIST_FULFILLED';
export const UPDATEADDRESSLIST_REJECTED='UPDATEADDRESSLIST_REJECTED';



export const DELETEADDRESS_PENDING='DELETEADDRESS_PENDING';
export const DELETEADDRESS_FULFILLED='DELETEADDRESS_FULFILLED';
export const DELETEADDRESS_REJECTED ='DELETEADDRESS_REJECTED';


export function addAddressCheck( addAddress ) {
    return dispatch => {
        dispatch({
            type : 'ADDRESS',
            payload : axios.post('http://localhost:4000/address/addAddress',addAddress)
        })

    }
}

export function AddressListCheck( userId ) {
    return dispatch => {
        dispatch({
            type : 'ADDRESSLIST',
            payload : axios.get('http://localhost:4000/address/user_id?user_id='+userId)
        })

    }
}


export function UpdateAddressCheck(AddressID,objAddress){
    return dispatch=>{
        dispatch({
            type:'UPDATEADDRESS',
            payload:axios.put('http://localhost:4000/address/adres/guncelle/'+AddressID,objAddress)
        })
    }
}

export function UpdateAddressListCheck(AddressID){
    return dispatch=>{
        dispatch({
            type:'UPDATEADDRESSLIST',
            payload: axios.get('http://localhost:4000/address/adres/'+AddressID)
        })
    }
}

export function DeleteAddressListCheck(AddressID){
    return dispatch=>{
        dispatch({
            type:'DELETEADDRESS',
            payload: axios.delete('http://localhost:4000/address/adres/delete/'+AddressID)
        })
    }
}





