import axios from 'axios';
export const PRODUCTLIST_PENDING = 'PRODUCTLIST_PENDING';
export const PRODUCTLIST_FULFILLED ='PRODUCTLIST_FULFILLED';
export const PRODUCTLIST_REJECTED='PRODUCTLIST_REJECTED';

export const FAVORITELIST_PENDING = 'FAVORITELIST_PENDING';
export const FAVORITELIST_FULFILLED ='FAVORITELIST_FULFILLED';
export const FAVORITELIST_REJECTED='FAVORITELIST_REJECTED';

export const ADDBASKET_PENDING = 'ADDBASKET_PENDING';
export const ADDBASKET_FULFILLED ='ADDBASKET_FULFILLED';
export const ADDBASKET_REJECTED='ADDBASKET_REJECTED';

export const FAVORITEADD_PENDING = 'FAVORITEADD_PENDING';
export const FAVORITEADD_FULFILLED ='FAVORITEADD_FULFILLED';
export const FAVORITEADD_REJECTED='FAVORITEADD_REJECTED';


export const FAVORITEDELETE_PENDING = 'FAVORITEDELETE_PENDING';
export const FAVORITEDELETE_FULFILLED ='FAVORITEDELETE_FULFILLED';
export const FAVORITEDELETE_REJECTED='FAVORITEDELETE_REJECTED';


export const BASKETLIST_PENDING = 'BASKETLIST_PENDING';
export const BASKETLIST_FULFILLED ='BASKETLIST_FULFILLED';
export const BASKETLIST_REJECTED='BASKETLIST_REJECTED';

export const STOCKUPDATE_PENDING = 'STOCKUPDATE_PENDING';
export const STOCKUPDATE_FULFILLED ='STOCKUPDATE_FULFILLED';
export const STOCKUPDATE_REJECTED='STOCKUPDATE_REJECTED';


export const BASKETDELETE_PENDING = 'BASKETDELETE_PENDING';
export const BASKETDELETE_FULFILLED ='BASKETDELETE_FULFILLED';
export const BASKETDELETE_REJECTED='BASKETDELETE_REJECTED';


export const BASKETADDRESSLIST_PENDING = 'BASKETADDRESSLIST_PENDING';
export const BASKETADDRESSLIST_FULFILLED ='BASKETADDRESSLIST_FULFILLED';
export const BASKETADDRESSLIST_REJECTED='BASKETADDRESSLIST_REJECTED';





export function ProductsListCheck(id){
    return dispatch => {
        dispatch({
            type : 'PRODUCTLIST',
            payload : axios.get('http://localhost:4000/urunler/category_urunler/'+id)
        })
    }
}

export function FavoriteProductsListCheck(userID){
    return dispatch => {
        dispatch({
            type : 'FAVORITELIST',
            payload : axios.get('http://localhost:4000/urunler/favorite/'+userID)
        })
    }
}

export function ProductsAddBasketCheck(userID,addBasket){
    return dispatch => {
        dispatch({
            type : 'ADDBASKET',
            payload : axios.post('http://localhost:4000/basket/addbasket/'+userID,addBasket)
        })
    }
}

export function ProductsAddFavoriteCheck(userID,favoriteID){
    return dispatch => {
        dispatch({
            type : 'FAVORITEADD',
            payload : axios.post('http://localhost:4000/people/favorite/'+userID,favoriteID)
        })
    }
}

export function ProductsDeleteFavoriteCheck(userID,favoriteID){
    return dispatch => {
        dispatch({
            type : 'FAVORITEDELETE',
            payload : axios.delete('http://localhost:4000/people/favorite/delete/'+userID,favoriteID)
        })
    }
}


export function BasketListCheck(userID){
    return dispatch => {
        dispatch({
            type : 'BASKETLIST',
            payload : axios.get('http://localhost:4000/basket/basketlist/'+userID)
        })
    }
}

export function BasketStockUpdate(userId, productId, stock){
    return dispatch => {
        dispatch({
            type : 'STOCKUPDATE',
            payload :  axios.put('http://localhost:4000/basket/basketstock/'+productId,{stock:stock, userId:userId})
        })
    }
}

export function BasketProductDeleteCheck(userId, productId){
    return dispatch => {
        dispatch({
            type : 'BASKETDELETE',
            payload :  axios.delete('http://localhost:4000/basket/basketlist/delete/'+userId,productId)
        })
    }
}

export function BasketAddressListCheck(userId){
    return dispatch => {
        dispatch({
            type : 'BASKETADDRESSLIST',
            payload :  axios.get('http://localhost:4000/address/user_id?user_id='+userId)
        })
    }
}
export function ProductsBigListCheck(id){
    return dispatch => {
        dispatch({
            type : 'PRODUCTLIST',
            payload : axios.get('http://localhost:4000/urunler/category_urunler_buyuk/'+id)
        })
    }
}

export function ProductsShortListCheck(id){
    return dispatch => {
        dispatch({
            type : 'PRODUCTLIST',
            payload : axios.get('http://localhost:4000/urunler/category_urunler_kucuk/'+id)
        })
    }
}