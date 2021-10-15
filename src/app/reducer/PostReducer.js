import {
  GET_POST_LOADING,
  GET_POST_SUCCESS,
  GET_POST_ERROR,
} from "../action/type";

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export default function PostReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POST_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_POST_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    }
    case GET_POST_ERROR: {
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
