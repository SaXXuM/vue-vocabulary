import axios from "axios";

function instance(baseUrl, token) {
  return axios.create({
    baseURL: baseUrl,
    timeout: 20000,
    headers: {
      "X-Appercode-Session-Token": token,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
}

export default instance;
