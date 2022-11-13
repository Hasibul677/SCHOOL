import { CLEAR_ERROR, REGISTER_USER_FAIL, REGISTER_USER_REQUEST, REGISTER_USER_SUCCESS } from "../Constants/userConstants";
import axios from "axios"



const config = {
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    credentials: "include",
};


//REGISTER
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const { data } = await axios.post(
            `http://localhost:5000/api/v1/createUser`,
            userData,
            config
        );

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user });
    } catch (error) {
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Clearing Error
export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
  };
  
