// import

import { FAIL_SWITCHS, GET_SWITCH, GET_SWITCHS, LOAD_SWITCHS } from "../actionTypes/switch";



//initial state 

const initialstate = {
    listShifts : [],
    error : null,
    load : false,
    shiftToGet: {}
}


// pure function


const switchReducer = (state = initialstate , {type, payload}) => {
    switch (type) {
        case LOAD_SWITCHS:
            return  {...state, load : true};
        case GET_SWITCHS:
            return {...state, load : false,listShifts: payload.listShifts};
        case GET_SWITCH:
            return {...state , shiftToGet: payload.shiftToGet, load : false};
        case FAIL_SWITCHS:
            return{...state, load : false, errors : payload};
    
        default:
            return state
    }
};

export default switchReducer;