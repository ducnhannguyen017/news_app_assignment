import {
  GET_CATEGORY_LOADING,
  GET_CATEGORY_SUCCESS,
  GET_CATEGORY_ERROR,
} from "../action/type";

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CATEGORY_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_CATEGORY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    }
    case GET_CATEGORY_ERROR: {
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
