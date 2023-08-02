import axios from "axios";
import { LOAD_REQUESTS, GET_REQUESTS, FAIL_REQUESTS, GET_REQUEST } from "../actionTypes/request";




// GET ALL REQUEST




export const getRequest = () => async (dispatch) => {
    dispatch ({ type : LOAD_REQUESTS});
    try {
        let result = await axios.get('/api/request/allrequest')
        dispatch ({type : GET_REQUESTS, payload: result.data});
    } catch (error) {
        dispatch({type : FAIL_REQUESTS, payload : error.response})
        
    }
};

// add request 


export const addRequest = (newRequest) => async ( dispatch) => {
    try {
        await axios.post("/api/request/addrequest", newRequest)
        dispatch(getRequest());
    } catch (error) {
        dispatch({type : FAIL_REQUESTS, payload : error.response})
    }
};


//delete 


export const deleteRequest = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/request/${id}`);
        dispatch(getRequest());
    } catch (error) {
        dispatch({type : FAIL_REQUESTS, payload : error.response})
    }
}

// edit

export const editRequest = (id, newRequest) => async (dispatch) =>{
    try {
        await axios.put(`/api/request/${id}`,newRequest);
        dispatch(getRequest());
    } catch (error) {
        dispatch({type : FAIL_REQUESTS, payload : error.response})
    }
}

// GET one

export const getOneRequest = (id) => async (dispatch) => {
    dispatch({type: LOAD_REQUESTS})
    try {
        let result = await axios.get(`/api/request/${id}`);
        dispatch( {type: GET_REQUEST , payload : result.data} )
    } catch (error) {
        dispatch({type : FAIL_REQUESTS, payload : error.response})
    }
}