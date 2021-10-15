import axios from "axios";
import Cookie from "js-cookie";
import queryString from "query-string";

// const Reactotron =
//   process.env.NODE_ENV !== "production" &&
//   require("reactotron-react-js").default;

function createAxios() {
  var axiosInstant = axios.create();
  axiosInstant.defaults.baseURL = "https://tintucapi.phamtruong010.xyz/";
  // axiosInstant.defaults.baseURL = "http://localhost:8888";
  axiosInstant.defaults.timeout = 20000;
  axiosInstant.defaults.headers = { "Content-Type": "application/json" };
  axiosInstant.defaults.headers = { "access-control-allow-origin": "*" };

  axiosInstant.interceptors.request.use(
    async (config) => {
      config.headers.token = Cookie.get("SESSION_ID");
      // Cookie.get('SESSION_ID')
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  axiosInstant.interceptors.response.use(
    (response) => {
      // log via ReactOtron
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        // Reactotron.apisauce(response);
      } else {
        // production code
      }

      if (response.data.code === 403) {
        Cookie.remove("SESSION_ID");
        window.location.reload();
      } else if (response.data.status !== 1)
        setTimeout(() => {
          // alert(response.data.msg);
        }, 300);
      return response;
    },
    (error) => {}
  );
  return axiosInstant;
}

export const axiosClient = createAxios();

/* Support function */
function handleResult(api) {
  console.log("api", api);
  return api.then((res) => {
    // alert(JSON.stringify(res.data));
    if (res.data.status !== 1) {
      if (res.data.code === 403) {
        Cookie.remove("SESSION_ID");
        alert("Phiên đăng nhập hết hạn.");
      }
      return Promise.reject(res.data);
    }
    return Promise.resolve(res.data);
  });
}
// handle url
function handleUrl(url, query) {
  console.log(queryString.stringifyUrl({ url: url, query }));
  return queryString.stringifyUrl({ url: url, query });
}

export const ApiClient = {
  get: (url, payload) => handleResult(axiosClient.get(handleUrl(url, payload))),
  post: (url, payload) => handleResult(axiosClient.post(url, payload)),
  put: (url, payload) => handleResult(axiosClient.put(url, payload)),
  path: (url, payload) => handleResult(axiosClient.patch(url, payload)),
  delete: (url, payload) => handleResult(axiosClient.delete(url, payload)),
};
