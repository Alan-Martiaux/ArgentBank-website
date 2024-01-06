import { setUser, setToken } from "./userSlice";
import axios from "axios";

export const fetchUserData = (email, password, navigate, dispatch) => {
  axios
    .post("http://localhost:3001/api/v1/user/login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      if (response) {
        const responseData = response.data;
        console.log(response);
        const token = responseData.body.token;
        console.log(responseData.message);
        dispatch(setToken(token));

        if (token) {
          console.log("WIN");
          navigate("/user");
          //  console.log(token);
        }
      }
    })

    .catch(function (error) {
      console.log(error);
    });
};

export const fetchUserProfil = (token, dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  console.log(headers, token);
  axios
    .post("http://localhost:3001/api/v1/user/profile", {}, { headers })
    .then(function (response) {
      console.log(response.data.body.userName);
      const data = response.data.body;
      dispatch(setUser(data));
    })

    .catch(function (error, response) {
      console.error(error);
      console.log(error.response);
    });
};
