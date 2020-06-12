import { PRODUCTLIST_PENDING, PRODUCTLIST_FULFILLED, PRODUCTLIST_REJECTED, FAVORITELIST_PENDING, FAVORITELIST_FULFILLED, FAVORITELIST_REJECTED, ADDBASKET_PENDING, ADDBASKET_FULFILLED, ADDBASKET_REJECTED, FAVORITEADD_PENDING, FAVORITEADD_FULFILLED, FAVORITEADD_REJECTED, FAVORITEDELETE_PENDING, FAVORITEDELETE_FULFILLED, FAVORITEDELETE_REJECTED, BASKETLIST_PENDING, BASKETLIST_FULFILLED, BASKETLIST_REJECTED, STOCKUPDATE_PENDING, STOCKUPDATE_FULFILLED, STOCKUPDATE_REJECTED, BASKETDELETE_PENDING, BASKETDELETE_FULFILLED, BASKETDELETE_REJECTED, BASKETADDRESSLIST_PENDING, BASKETADDRESSLIST_FULFILLED, BASKETADDRESSLIST_REJECTED } from './Product_action';
const initialState = {
    loading: false,
    reject: false,
    productList: {},
    favoriteList: {},
    basketAdd: {},
    favoriteAdd: {},
    favoriteDelete: false,
    basketList: {},
    Stock: false,
    basketDelete: false,
    basketAddressList:{},

}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case PRODUCTLIST_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case PRODUCTLIST_FULFILLED:
            return {
                ...state,
                loading: true,
                productList: action.payload,
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case PRODUCTLIST_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case FAVORITELIST_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,


            }
        case FAVORITELIST_FULFILLED:
            return {
                ...state,
                loading: true,
                favoriteList: action.payload,
                productList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case FAVORITELIST_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case ADDBASKET_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,


            }
        case ADDBASKET_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: action.payload,
                productList: {},
                favoriteList: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case ADDBASKET_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case FAVORITEADD_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,


            }
        case FAVORITEADD_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: {},
                productList: {},
                favoriteList: {},
                favoriteAdd: action.payload,
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case FAVORITEADD_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case FAVORITEDELETE_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,


            }
        case FAVORITEDELETE_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: {},
                productList: {},
                favoriteList: {},
                favoriteAdd: {},
                favoriteDelete: true,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case FAVORITEDELETE_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }

        case BASKETLIST_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,



            }
        case BASKETLIST_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: {},
                productList: {},
                favoriteList: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: action.payload,
                Stock: false,
                basketDelete: false,

            }
        case BASKETLIST_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case STOCKUPDATE_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,



            }
        case STOCKUPDATE_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: {},
                productList: {},
                favoriteList: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: true,
                basketDelete: false,

            }
        case STOCKUPDATE_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case BASKETDELETE_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,



            }
        case BASKETDELETE_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: {},
                productList: {},
                favoriteList: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: true,

            }
        case BASKETDELETE_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,

            }
        case BASKETADDRESSLIST_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,
                basketAddressList:{},



            }
        case BASKETADDRESSLIST_FULFILLED:
            return {
                ...state,
                loading: true,
                basketAdd: {},
                productList: {},
                favoriteList: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,
                basketAddressList:action.payload,

            }
        case BASKETADDRESSLIST_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                favoriteList: {},
                basketAdd: {},
                favoriteAdd: {},
                favoriteDelete: false,
                basketList: {},
                Stock: false,
                basketDelete: false,
                basketAddressList:{},

            }

        default:
            return state
    }

}