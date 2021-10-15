import {
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
} from "../action/type";

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export default function AuthReducer(state = initialState, action) {
  switch (action.type) {
    case GET_AUTH_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_AUTH_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    }
    case GET_AUTH_ERROR: {
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
