import { MEMBERLIST_PENDING, MEMBERLIST_FULFILLED, MEMBERLIST_REJECTED, MEMBERUPDATELIST_PENDING, MEMBERUPDATELIST_FULFILLED, MEMBERUPDATELIST_REJECTED, MEMBERUPDATE_PENDING, MEMBERUPDATE_FULFILLED, MEMBERUPDATE_REJECTED,MEMBERDELETE_PENDING,MEMBERDELETE_FULFILLED,MEMBERDELETE_REJECTED,ORDERLIST_PENDING,ORDERLIST_FULFILLED,ORDERLIST_REJECTED} from './Admin_action';

const initialState = {
    loading: false,
    reject: false,
    AdminMemberList: {},
    MemberError: false,
    UpdateMemberList: {},
    UpdateMember: {},
    memberDelet:false,
    OrdersList: {},

}

export default (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case MEMBERLIST_PENDING:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: false,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},

            }
        case MEMBERLIST_FULFILLED:
            return {
                ...state,
                loading: true,
                AdminMemberList: action.payload,
                MemberError: false,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},
            }
        case MEMBERLIST_REJECTED:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: true,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},
            }
        case MEMBERUPDATELIST_PENDING:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: false,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},

            }
        case MEMBERUPDATELIST_FULFILLED:
            return {
                ...state,
                loading: true,
                AdminMemberList:{} ,
                MemberError: false,
                UpdateMemberList: action.payload,
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},
            }
        case MEMBERUPDATELIST_REJECTED:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: true,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},
            }
        case MEMBERUPDATE_PENDING:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: false,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},

            }
        case MEMBERUPDATE_FULFILLED:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: false,
                UpdateMemberList: {},
                UpdateMember: action.payload,
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},
            }
        case MEMBERUPDATE_REJECTED:
            return {
                ...state,
                loading: true,
                AdminMemberList: {},
                MemberError: true,
                UpdateMemberList: {},
                UpdateMember: {},
                memberDelete:false,
                OrdersList:{},
            }
            case MEMBERDELETE_PENDING:
                return {
                    ...state,
                    loading: true,
                    AdminMemberList: {},
                    MemberError: false,
                    UpdateMemberList: {},
                    UpdateMember: {},
                    memberDelete:false,
                    OrdersList:{},
    
                }
            case MEMBERDELETE_FULFILLED:
                return {
                    ...state,
                    loading: true,
                    AdminMemberList: {},
                    MemberError: false,
                    UpdateMemberList: {},
                    UpdateMember:{},
                    UpdateMember: {},
                    memberDelete:true,
                    OrdersList:{},
                }
            case MEMBERDELETE_REJECTED:
                return {
                    ...state,
                    loading: true,
                    AdminMemberList: {},
                    MemberError: true,
                    UpdateMemberList: {},
                    UpdateMember: {},
                    memberDelete:false,
                    OrdersList:{},
                }
                case ORDERLIST_PENDING:
                    return {
                        ...state,
                        loading: true,
                        AdminMemberList: {},
                        MemberError: false,
                        UpdateMemberList: {},
                        UpdateMember: {},
                        memberDelete:false,
                        OrdersList:{},
        
                    }
                case ORDERLIST_FULFILLED:
                    return {
                        ...state,
                        loading: true,
                        AdminMemberList: {},
                        MemberError: false,
                        UpdateMemberList: {},
                        UpdateMember:{},
                        UpdateMember: {},
                        memberDelete:false,
                        OrdersList:action.payload,
                    }
                case ORDERLIST_REJECTED:
                    return {
                        ...state,
                        loading: true,
                        AdminMemberList: {},
                        MemberError: true,
                        UpdateMemberList: {},
                        UpdateMember: {},
                        memberDelete:false,
                        OrdersList:{},
                    }
        default:
            return state
    }

}