

import axios from 'axios';
import { CURRENT_ADMIN, FAIL_ADMIN, LOAD_ADMIN, LOGOUT_ADMIN, SUCCESS_ADMIN } from '../actionTypes/admin';


export const loginAdmin = (admin) => async (dispatch) => {
    dispatch({type : LOAD_ADMIN})

    try {
        let result = await axios.post ('/api/admin/loginadmin', admin)
        dispatch({type : SUCCESS_ADMIN, payload : result.data})
    } catch (error) {
        dispatch({type : FAIL_ADMIN, payload : error.response.data.errors}) 
    }
};


export const currentAdmin = () => async (dispatch) => {
    dispatch ({type : LOAD_ADMIN})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.get('/api/admin/currentadmin', config);
        dispatch({type :CURRENT_ADMIN, payload : result.data})
        }
        catch (error) {
        dispatch({type : FAIL_ADMIN, payload : error.response.data.errors}) 
        
    }
}

export const logoutAdmin = () => async (dispatch) => {
dispatch({type: LOGOUT_ADMIN});
}