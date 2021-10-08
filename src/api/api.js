import { ApiClient } from "./config"

export const requestCategory = () => ApiClient.get('api/list-category')
export const requestDetailPost = (params) => ApiClient.get('api/detail-post', params)
