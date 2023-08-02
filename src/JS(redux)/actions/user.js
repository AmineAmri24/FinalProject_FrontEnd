import { CURRENT_USER, FAIL_USER, GET_USERS, LOAD_USER, LOGOUT_USER, SUCCESS_USER } from "../actionTypes/user"
import axios from 'axios';




// Get all users


export const getUsers = () => async (dispatch) => {
    dispatch ({ type : LOAD_USER});
    try {
        let result = await axios.get('/api/user/getall')
        dispatch ({type : GET_USERS, payload: result.data});
    } catch (error) {
        dispatch({type : FAIL_USER, payload : error.response})
        
    }
};





export const register = (newUser) => async (dispatch) => {
    dispatch({type : LOAD_USER})
    try {
        let result = await axios.post('/api/user/register', newUser) 
        dispatch({type : SUCCESS_USER , payload : result.data})
    } catch (error) {

        dispatch({type : FAIL_USER, payload : error.response.data.errors})
        
    }
};



export const login = (user, history) => async (dispatch) => {
    dispatch({type : LOAD_USER})

    try {
        let result = await axios.post ('/api/user/login', user)
        dispatch({type : SUCCESS_USER, payload : result.data})
    } catch (error) {
        dispatch({type : FAIL_USER, payload : error.response.data.errors}) 
    }
};


export const current = () => async (dispatch) => {
    dispatch ({type : LOAD_USER})
    try {
        const config = {
            headers : {
                authorization : localStorage.getItem("token")
            }
        }
        let result = await axios.get('/api/user/current', config);
        dispatch({type :CURRENT_USER, payload : result.data})
        }
        catch (error) {
        dispatch({type : FAIL_USER, payload : error.response.data.errors}) 
        
    }
}

export const logout = () => async (dispatch) => {
dispatch({type: LOGOUT_USER});
}


// delete contact

export const deleteUser = (id) => async (dispatch) => {
    try {
        await axios.delete(`/api/user/${id}`);
        dispatch(getUsers());
    } catch (error) {
        dispatch({type : FAIL_USER, payload : error.response})
    }
}