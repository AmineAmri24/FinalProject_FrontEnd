// import

import { CLEAR_ERRORS, CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGOUT_ADMIN, SUCCESS_ADMIN } from "../actionTypes/admin";





// initial state

const initialState = {

    admin : null,
    loadAdmin : false,
    errors : null,
    isAuthAdmin : false
}


// pure function


const adminReducer = (state = initialState, {type , payload}) => {
    switch (type) {
        case LOAD_ADMIN : 
        return {...state, loadAdmin: true};


        case SUCCESS_ADMIN : 
        localStorage.setItem("token", payload.token)
        return {...state, loadAdmin: false, admin : payload.admin, isAuthAdmin : true};
        
        case CURRENT_ADMIN : 

        return {...state, admin: payload , loadAdmin: false, isAuthAdmin: true}

        case LOGOUT_ADMIN :
            localStorage.removeItem("token")
            return {  admin : null,
                loadAdmin : false,
                errors : null,
                isAuthAdmin : false}

        case FAIL_ADMIN:
            return {...state, loadAdmin : false, errors : payload}

            case CLEAR_ERRORS : 
            return {...state, errors : null}
    
        default:
            return state
    }
}

export default adminReducer;