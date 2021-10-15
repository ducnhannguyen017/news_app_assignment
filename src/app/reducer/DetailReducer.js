import {
  GET_DETAIL_LOADING,
  GET_DETAIL_SUCCESS,
  GET_DETAIL_ERROR,
} from "../action/type";

const initialState = {
  data: {},
  isLoading: true,
  error: null,
};

export default function DetailReducer(state = initialState, action) {
  switch (action.type) {
    case GET_DETAIL_LOADING: {
      return { ...state, isLoading: true };
    }
    case GET_DETAIL_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload,
      };
    }
    case GET_DETAIL_ERROR: {
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
