import { API_METHOD, api } from "./common";

const postApi = {
  getPosts: () => api(API_METHOD.GET, "/posts"),
};

export default postApi;
