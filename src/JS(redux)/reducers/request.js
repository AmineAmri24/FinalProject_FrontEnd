// import

import { GET_REQUESTS, GET_REQUEST, FAIL_REQUESTS, LOAD_REQUESTS, } from "../actionTypes/request";




// initial state

const initialstate = {
    listRequests : [],
    error : null,
    load : false,
    requestToGet: {}
}


// pure function

const requestReducer = (state = initialstate , {type, payload}) => {
    switch (type) {
        case LOAD_REQUESTS:
            return  {...state, load : true};
        case GET_REQUESTS:
            return {...state, load : false, listRequests: payload.listRequests};
        case GET_REQUEST:
            return {...state , requestToGet : payload.requestToGet, load : false};
        case FAIL_REQUESTS:
            return{...state, load : false, errors : payload};
    
        default:
            return state
    }
};

export default requestReducer;
