import { ApiClient } from "./config";

export const requestCategory = () => ApiClient.get("api/list-category");
export const requestPost = (params) => ApiClient.get("api/list-post", params);
export const requestDetailPost = (params) =>
  ApiClient.get("api/detail-post", params);

export const requestAuth = (params) => ApiClient.post("api/cms/login", params);

export const requestAddParentCategory = (params) =>
  ApiClient.post("api/cms/create-category-parent", params);
export const requestAddChildCategory = (params) =>
  ApiClient.post("api/cms/create-category-child", params);

export const requestRemoveParentCategory = (params) =>
  ApiClient.post("api/cms/remove-category-parent", params);
export const requestRemoveChildCategory = (params) =>
  ApiClient.post("api/cms/remove-category-child", params);

export const requestAddPost = (params) =>
  ApiClient.post("api/cms/create-post", params);
export const requestRemovePost = (params) =>
  ApiClient.post("api/cms/remove-post", params);
export const requestUpdatePost = (params) =>
  ApiClient.post("api/cms/update-post", params);
