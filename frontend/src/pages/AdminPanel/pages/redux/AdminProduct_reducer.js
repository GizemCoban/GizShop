import { PRODUCTADD_PENDING, PRODUCTADD_FULFILLED, PRODUCTADD_REJECTED, CATEGORYADD_PENDING, CATEGORYADD_FULFILLED, CATEGORYADD_REJECTED, SELECTCATEGORY_PENDING, SELECTCATEGORY_FULFILLED, SELECTCATEGORY_REJECTED, PRODUCTLIST_PENDING, PRODUCTLIST_FULFILLED, PRODUCTLIST_REJECTED, PRODUCTUPDATELIST_PENDING, PRODUCTUPDATELIST_FULFILLED, PRODUCTUPDATELIST_REJECTED, PRODUCTUPDATE_PENDING, PRODUCTUPDATE_FULFILLED, PRODUCTUPDATE_REJECTED,PRODUCTDELETE_PENDING,PRODUCTDELETE_FULFILLED,PRODUCTDELETE_REJECTED } from './Admin_action';

const initialState = {
    loading: false,
    reject: false,
    product: {},
    category: {},
    selectcatogories: {},
    productList: {},
    UpdatePruductList: {},
    UpdatePruduct: {},
    productDelete:false,


}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case PRODUCTADD_PENDING:
            return {
                ...state,
                loading: true,
                product: {},
                category: {},
                selectcatogories: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case PRODUCTADD_FULFILLED:
            return {
                ...state,
                loading: true,
                product: action.payload,
                category: {},
                selectcatogories: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,

            }
        case PRODUCTADD_REJECTED:
            return {
                ...state,
                loading: true,
                product: {},
                category: {},
                selectcatogories: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,

            }
        case CATEGORYADD_PENDING:
            return {
                ...state,
                loading: true,
                product: {},
                category: {},
                selectcatogories: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case CATEGORYADD_FULFILLED:
            return {
                ...state,
                loading: true,
                category: action.payload,
                product: {},
                selectcatogories: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,

            }
        case CATEGORYADD_REJECTED:
            return {
                ...state,
                loading: true,
                product: {},
                category: {},
                selectcatogories: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,

            }
        case SELECTCATEGORY_PENDING:
            return {
                ...state,
                loading: true,
                selectcatogories: {},
                product: {},
                category: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,



            }
        case SELECTCATEGORY_FULFILLED:
            return {
                ...state,
                loading: true,
                selectcatogories: action.payload,
                product: {},
                category: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case SELECTCATEGORY_REJECTED:
            return {
                ...state,
                loading: true,
                selectcatogories: {},
                product: {},
                category: {},
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case PRODUCTLIST_PENDING:
            return {
                ...state,
                loading: true,
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case PRODUCTLIST_FULFILLED:
            return {
                ...state,
                loading: true,
                productList: action.payload,
                productDelete:false,

            }
        case PRODUCTLIST_REJECTED:
            return {
                ...state,
                loading: true,
                productList: {},
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,

            }
        case PRODUCTUPDATELIST_PENDING:
            return {
                ...state,
                loading: true,
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case PRODUCTUPDATELIST_FULFILLED:
            return {
                ...state,
                loading: true, 
                UpdatePruductList:action.payload,
                UpdatePruduct: {},
                productDelete:false,
                


            }
        case PRODUCTUPDATELIST_REJECTED:
            return {
                ...state,
                loading: true,
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case PRODUCTUPDATE_PENDING:
            return {
                ...state,
                loading: true,
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
        case PRODUCTUPDATE_FULFILLED:
            return {
                ...state,
                loading: true,
                UpdatePruductList: {},
                UpdatePruduct:action.payload,
                productDelete:false,


            }
        case PRODUCTUPDATE_REJECTED:
            return {
                ...state,
                loading: true,
                UpdatePruductList: {},
                UpdatePruduct: {},
                productDelete:false,


            }
            case PRODUCTDELETE_PENDING:
                return {
                    ...state,
                    loading: true,
                    UpdatePruductList: {},
                    UpdatePruduct: {},
                    productDelete:false,
    
    
                }
            case PRODUCTDELETE_FULFILLED:
                return {
                    ...state,
                    loading: true,
                    UpdatePruductList: {},
                    UpdatePruduct:{},
                    productDelete:true,
    
    
                }
            case PRODUCTDELETE_REJECTED:
                return {
                    ...state,
                    loading: true,
                    UpdatePruductList: {},
                    UpdatePruduct: {},
                    productDelete:false,
    
    
                }

        default:
            return state
    }

}