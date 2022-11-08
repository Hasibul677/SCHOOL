import {ALL_USER_REQUEST, ALL_USER_SUCCESS, ALL_USER_FAIL, CLEAR_ERROR} from "../Constants/TestConstant"

export const testeducer = (state = { users: [] }, action) => {
    switch (action.type) {
      case ALL_USER_REQUEST:
        return {
          loading: true,
          users: [],
        };
      case ALL_USER_SUCCESS:
        return {
          loading: false,
          users: action.payload,
        };
      case ALL_USER_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      case CLEAR_ERROR:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };