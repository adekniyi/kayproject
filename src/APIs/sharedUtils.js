import axios from "axios";

export const setAuthToken = (token) => {
  // check if token has expired or is valid below
  //...
  console.log(token);
  if (token) {
    axios.defaults.headers.common["x-auth-token"] = token;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["x-auth-token"];
    // check if token has expired
  }
};

export const interceptor = (history) =>
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error && error.response && error.response.status === 401)
        console.log("Unauthorized...");
      console.log(error);
      // remove token so we can re-login
      localStorage.removeItem("userDetails");
      // go back to login page
      history.replace("/login");
      return Promise.reject(error);
    }
  );

export const handleErrors = (e) => {
  if (e.response) {
    console.log(e.response);
  } else {
    console.log(e.message);
  }
};

