import { put, call, takeLatest } from "@redux-saga/core/effects";
import {
  requestAuth,
  requestCategory,
  requestDetailPost,
  requestPost,
} from "api/api";
import {
  GET_CATEGORY_LOADING,
  GET_CATEGORY_ERROR,
  GET_CATEGORY_SUCCESS,
  GET_POST_LOADING,
  GET_POST_ERROR,
  GET_POST_SUCCESS,
  GET_DETAIL_LOADING,
  GET_DETAIL_ERROR,
  GET_DETAIL_SUCCESS,
  GET_AUTH_LOADING,
  GET_AUTH_SUCCESS,
  GET_AUTH_ERROR,
} from "./action/type";

export function* getCategory() {
  try {
    const response = yield call(requestCategory);
    yield put({ type: GET_CATEGORY_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_CATEGORY_ERROR, payload: err });
  }
}
export const watchGetCategory = takeLatest(GET_CATEGORY_LOADING, getCategory);

export function* getPost() {
  try {
    const response = yield call(requestPost);
    yield put({ type: GET_POST_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_POST_ERROR, payload: err });
  }
}
export const watchGetPost = takeLatest(GET_POST_LOADING, getPost);

export function* getDetail(action) {
  try {
    const response = yield call(requestDetailPost, action.payload);
    yield put({ type: GET_DETAIL_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_DETAIL_ERROR, payload: err });
  }
}
export const watchGetDetail = takeLatest(GET_DETAIL_LOADING, getDetail);

export function* postAuth(action) {
  try {
    const response = yield call(requestAuth, action.payload);
    yield put({ type: GET_AUTH_SUCCESS, payload: response });
  } catch (err) {
    yield put({ type: GET_AUTH_ERROR, payload: err });
  }
}
export const watchPostAuth = takeLatest(GET_AUTH_LOADING, postAuth);

export default function* rootSaga() {
  yield watchGetDetail;
  yield watchGetPost;
  yield watchGetCategory;
  yield watchPostAuth;
}
