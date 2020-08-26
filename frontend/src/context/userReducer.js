import {ADD_USERS, 
    DELETE_USERS,
    GET_USERS,
    UPDATE_USERS,
    VALIDATE_USER,
    CLEAN_USER,
    CURRENT_USER} from '../types/index'

    export default (state, action)=> {
        switch (action.type){
            case GET_USERS: 
                return {
                    ...state,
                    users: action.payload
    
                }
            case ADD_USERS:
                return {
                    ...state,
                    users:[action.payload, ...state.users],
                    errorUser:false
                }
            case VALIDATE_USER:
                return {
                    ...state,
                    errorUser:true
                }
            case DELETE_USERS:
                return {
                    ...state,
                    users:state.users.filter(user=> user._id !== action.payload)
                }
            case UPDATE_USERS:
                return {
                    ...state,
                    users: state.users.map(user=> user._id===action.payload._id ? action.payload : user )
                }
            case CURRENT_USER:
                return {
                    ...state,
                    userSelected:action.payload
                }
            case CLEAN_USER:
                return {
                    ...state,
                    userSelected:null
                }
            default :
                return state;
        }
    }