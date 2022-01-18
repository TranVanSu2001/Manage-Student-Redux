import axios from "axios";

const API_METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

const BASE_URL = "https://gorest.co.in/public/v1";

const api = async (method = API_METHOD.GET, url, requestBody, params) => {
  try {
    const res = await axios({
      method,
      url: BASE_URL + url,
      data: requestBody,
      params,
    });

    return res.data;
  } catch (err) {
    console.log("err", err);
  }
};

export { api, API_METHOD };
