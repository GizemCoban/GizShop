import axios from 'axios';
export const MEMBERLIST_PENDING = 'MEMBERLIST_PENDING';
export const MEMBERLIST_FULFILLED ='MEMBERLIST_FULFILLED';
export const MEMBERLIST_REJECTED='MEMBERLIST_REJECTED';

export const MEMBERUPDATELIST_PENDING='MEMBERUPDATELIST_PENDING';
export const MEMBERUPDATELIST_FULFILLED='MEMBERUPDATELIST_FULFILLED';
export const MEMBERUPDATELIST_REJECTED='MEMBERUPDATELIST_REJECTED';

export const MEMBERUPDATE_PENDING='MEMBERUPDATE_PENDING';
export const MEMBERUPDATE_FULFILLED='MEMBERUPDATE_FULFILLED';
export const MEMBERUPDATE_REJECTED='MEMBERUPDATE_REJECTED';

export const PRODUCTADD_PENDING='PRODUCTADD_PENDING';
export const PRODUCTADD_FULFILLED='PRODUCTADD_FULFILLED';
export const PRODUCTADD_REJECTED='PRODUCTADD_REJECTED';


export const CATEGORYADD_PENDING='CATEGORYADD_PENDING';
export const CATEGORYADD_FULFILLED='CATEGORYADD_FULFILLED';
export const CATEGORYADD_REJECTED='CATEGORYADD_REJECTED';


export const SELECTCATEGORY_PENDING='SELECTCATEGORY_PENDING';
export const SELECTCATEGORY_FULFILLED='SELECTCATEGORY_FULFILLED';
export const SELECTCATEGORY_REJECTED='SELECTCATEGORY_REJECTED';

export const PRODUCTLIST_PENDING = 'PRODUCTLIST_PENDING';
export const PRODUCTLIST_FULFILLED ='PRODUCTLIST_FULFILLED';
export const PRODUCTLIST_REJECTED='PRODUCTLIST_REJECTED';


export const PRODUCTUPDATELIST_PENDING = 'PRODUCTUPDATELIST_PENDING';
export const PRODUCTUPDATELIST_FULFILLED ='PRODUCTUPDATELIST_FULFILLED';
export const PRODUCTUPDATELIST_REJECTED='PRODUCTUPDATELIST_REJECTED';



export const PRODUCTUPDATE_PENDING = 'PRODUCTUPDATE_PENDING';
export const PRODUCTUPDATE_FULFILLED ='PRODUCTUPDATE_FULFILLED';
export const PRODUCTUPDATE_REJECTED='PRODUCTUPDATE_REJECTED';


export const PRODUCTDELETE_PENDING = 'PRODUCTDELETE_PENDING';
export const PRODUCTDELETE_FULFILLED ='PRODUCTDELETE_FULFILLED';
export const PRODUCTDELETE_REJECTED='PRODUCTDELETE_REJECTED';

export const MEMBERDELETE_PENDING = 'MEMBERDELETE_PENDING';
export const MEMBERDELETE_FULFILLED ='MEMBERDELETE_FULFILLED';
export const MEMBERDELETE_REJECTED='MEMBERDELETE_REJECTED';

export const ORDERLIST_PENDING = 'ORDERLIST_PENDING';
export const ORDERLIST_FULFILLED ='ORDERLIST_FULFILLED';
export const ORDERLIST_REJECTED='ORDERLIST_REJECTED';



export function AdminMemberListCheck(){
    return dispatch => {
        dispatch({
            type : 'MEMBERLIST',
            payload : axios.get('http://localhost:4000/people/kisiler')
        })
    }
}


export function AdminMemberUpdateListCheck(userID){
    return dispatch => {
        dispatch({
            type : 'MEMBERUPDATELIST',
            payload : axios.get('http://localhost:4000/people/kisiler/'+ userID)
        })
    }
}



export function AdminMemberUpdateCheck(userID,objAdminUpdate){
    return dispatch => {
        dispatch({
            type : 'MEMBERUPDATE',
            payload : axios.put('http://localhost:4000/people/guncelle/'+userID,objAdminUpdate)
        })
    }
}


export function AdminProductAddCheck(objAddProduct){
    return dispatch => {
        dispatch({
            type : 'PRODUCTADD',
            payload : axios.post('http://localhost:4000/urunler/products',objAddProduct)
        })
    }
}


export function AdminCategorytAddCheck(objAddCategory){
    return dispatch => {
        dispatch({
            type : 'CATEGORYADD',
            payload : axios.post('http://localhost:4000/categories/category',objAddCategory)
        })
    }
}


export function AdminCategorytSelectCheck(){
    return dispatch => {
        dispatch({
            type : 'SELECTCATEGORY',
            payload : axios.get('http://localhost:4000/categories/kategoriler')
        })
    }
}


export function AdminProductListCheck(){
    return dispatch => {
        dispatch({
            type : 'PRODUCTLIST',
            payload : axios.get('http://localhost:4000/urunler/urunlistele')
        })
    }
}
export function AdminProductUpdateListCheck(productID){
    return dispatch => {
        dispatch({
            type : 'PRODUCTUPDATELIST',
            payload : axios.get('http://localhost:4000/urunler/urun/'+productID)
        })
    }
}



export function AdminProductUpdateCheck(productID,objAdminProductUpdate){
    return dispatch => {
        dispatch({
            type : 'PRODUCTUPDATE',
            payload : axios.put('http://localhost:4000/urunler/urunguncelle/'+productID,objAdminProductUpdate)
        })
    }
}

export function AdminProductDeleteCheck(productID){
    return dispatch => {
        dispatch({
            type : 'PRODUCTDELETE',
            payload : axios.delete('http://localhost:4000/urunler/delete/'+productID)
        })
    }
}

export function AdminMemberDeleteCheck(userID){
    return dispatch => {
        dispatch({
            type : 'MEMBERDELETE',
            payload : axios.delete('http://localhost:4000/people/kisiler/'+userID)
        })
    }
}

export function AdminOrdersListCheck(){
    return dispatch => {
        dispatch({
            type : 'ORDERLIST',
            payload : axios.get('http://localhost:4000/orders/siparisliste')
        })
    }
}




