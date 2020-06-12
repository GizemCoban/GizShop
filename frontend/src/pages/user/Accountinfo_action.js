import axios from 'axios';
export const ACCOUNTINFO_PENDING = 'ADDRESS_PENDING';
export const ACCOUNTINFO_FULFILLED ='ACCOUNTINFO_FULFILLED';
export const ACCOUNTINFO_REJECTED='ACCOUNTINFO_REJECTED';

export const UPDATEACCOUNTINFO_PENDING = 'UPDATEACCOUNTINFO_PENDING';
export const UPDATEACCOUNTINFO_FULFILLED ='UPDATEACCOUNTINFO_FULFILLED';
export const UPDATEACCOUNTINFO_REJECTED='UPDATEACCOUNTINFO_REJECTED';

export const UPDATEPASSWORD_PENDING = 'UPDATEPASSWORD_PENDING';
export const UPDATEPASSWORD_FULFILLED ='UPDATEPASSWORD_FULFILLED';
export const UPDATEPASSWORD_REJECTED='UPDATEPASSWORD_REJECTED';


export function AccountinfoListCheck(userID){
    return dispatch => {
        dispatch({
            type : 'ACCOUNTINFO',
            payload : axios.get('http://localhost:4000/people/kisiler/'+userID)
        })

    }
}

export function UpdateAccountinfoCheck(userID,objAccountinfo){
    return dispatch => {
        dispatch({
            type : 'UPDATEACCOUNTINFO',
            payload : axios.put('http://localhost:4000/people/guncelle/' + userID,objAccountinfo)
        })

    }
}

export function UpdatePasswordfoCheck(userID,updatePassword){
    return dispatch => {
        dispatch({
            type : 'UPDATEPASSWORD',
            payload : axios.put('http://localhost:4000/people/newpassword/'+userID,updatePassword)
        })

    }

}
