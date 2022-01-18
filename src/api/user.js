import { API_METHOD, api } from "./common";

const userApi = {
  getUsers: () => api(API_METHOD.GET, "/users"),
};

export default userApi;
