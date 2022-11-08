import axios from "axios";
import {
  ALL_USER_REQUEST,
  ALL_USER_SUCCESS,
  ALL_USER_FAIL,
  CLEAR_ERROR,
} from "../Constants/TestConstant";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_USER_REQUEST });

    const  {data}  = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );

    dispatch({
      type: ALL_USER_SUCCESS,
      payload: data,
    });

  } catch (error) {
    dispatch({
      type: ALL_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clearing Error
export const clearError = () => async (dispatch) => {
  dispatch({ type: CLEAR_ERROR });
};
