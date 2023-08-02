import axios from "axios";
import { FAIL_SWITCHS, GET_SWITCH, GET_SWITCHS, LOAD_SWITCHS } from "../actionTypes/switch";




// GET ALL shifts




export const getSwitch = () => async (dispatch) => {
    dispatch ({ type : LOAD_SWITCHS});
    try {
        let result = await axios.get('/api/switch/getallshift')
        dispatch ({type : GET_SWITCHS, payload: result.data});
    } catch (error) {
        dispatch({type : FAIL_SWITCHS, payload : error.response})
        
    }
};

// add shift 


export const addSwitch = (newSwitch) => async ( dispatch) => {
    try {
        await axios.post("/api/switch/addswitch", newSwitch)
        dispatch(getSwitch());
    } catch (error) {
        dispatch({type : FAIL_SWITCHS, payload : error.response})
    }
};


//delete 


export const deleteSwitch = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/switch/${id}`);
        dispatch(getSwitch());
    } catch (error) {
        dispatch({type : FAIL_SWITCHS, payload : error.response})
    }
}

// edit

export const editSwitch = (id, newSwitch) => async (dispatch) =>{
    try {
        await axios.put(`/api/switch/${id}`,newSwitch);
        dispatch(getSwitch());
    } catch (error) {
        dispatch({type : FAIL_SWITCHS, payload : error.response})
    }
}

// GET one

export const getOneSwitch = (id) => async (dispatch) => {
    dispatch({type: LOAD_SWITCHS})
    try {
        let result = await axios.get(`/api/switch/${id}`);
        dispatch( {type: GET_SWITCH , payload : result.data} )
    } catch (error) {
        dispatch({type : FAIL_SWITCHS, payload : error.response})
    }
}