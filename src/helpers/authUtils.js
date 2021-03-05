import axios from "axios";
import Cookies from "js-cookie";

export const API_URL = "http://localhost:8000/";


//Set the logged in user data in local session
const setLoggedInUser = (user) => {
  // sessionStorage.setItem("user", JSON.stringify(user));
  Cookies.set("user", JSON.stringify(user));
};

// Gets the logged in user data from local session
// const getLoggedInUser = () => {
//     const user = sessionStorage.getItem('user');
//     if (user) 5ED RT
//         return JSON.parse(user);
//     return null;
// }

const getLoggedInUser = () => {
  // if (!sessionStorage.getItem("user")) return null;
  // return JSON.parse(sessionStorage.getItem("user"));
  if (!Cookies.get("user")) return null;
  return JSON.parse(Cookies.get("user"));
};

//is user is logged in
const isUserAuthenticated = () => {
  return getLoggedInUser() !== null;
};

// Register Method
const postRegister = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      if (response.status >= 200 || response.status <= 299)
        return response.data;
      throw response.data;
    })
    .catch((err) => {
      var message;
      if (err.response && err.response.status) {
        switch (err.response.status) {
          case 404:
            message = "Sorry! the page you are looking for could not be found";
            break;
          case 500:
            message =
              "Sorry! something went wrong, please contact our support team";
            break;
          case 401:
            message = "Invalid credentials";
            break;
          default:
            message = err[1];
            break;
        }
      }
      throw message;
    });
};

// Login Method
const postLogin = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      if (response.status === 400 || response.status === 500)
        throw response.data;
      return response.data;
    })
    .catch((err) => {
      throw err[1];
    });
};

// postForgetPwd
const postForgetPwd = (url, data) => {
  return axios
    .post(url, data)
    .then((response) => {
      if (response.status === 400 || response.status === 500)
        throw response.data;
      return response.data;
    })
    .catch((err) => {
      throw err[1];
    });
};

export {
  setLoggedInUser,
  getLoggedInUser,
  isUserAuthenticated,
  postRegister,
  postLogin,
  postForgetPwd,
};
