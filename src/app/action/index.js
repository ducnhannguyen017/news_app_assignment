import {
  GET_AUTH_LOADING,
  GET_CATEGORY_LOADING,
  GET_DETAIL_LOADING,
  GET_POST_LOADING,
} from "./type";

export const getCategory = () => ({
  type: GET_CATEGORY_LOADING,
  payload: {},
});
export const getPost = (payload) => ({
  type: GET_POST_LOADING,
  payload: {} || payload,
});
export const getDetail = (payload) => ({
  type: GET_DETAIL_LOADING,
  payload: payload,
});
export const postAuth = (payload) => ({
  type: GET_AUTH_LOADING,
  payload: payload,
});
