import { setUser, setToken, setUsername } from "./userSlice";
import axios from "axios";

const URL = "http://localhost:3001/api/v1/user/";

export const fetchUserData = (email, password, navigate, dispatch) => {
  axios
    .post(URL + "login", {
      email: email,
      password: password,
    })
    .then(function (response) {
      if (response && response.status === 200) {
        const responseData = response.data;
        console.log(response);
        const token = responseData.body.token;
        console.log(responseData.message);
        dispatch(setToken(token));

        if (token) {
          console.log("WIN");
          navigate("/user");
        }
      }
    })

    .catch(function (error) {
      console.log(error);

      alert("Veuillez verifier vos identifiant de connexion !");
    });
};

export const fetchUserProfil = (token, dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  axios
    .post(URL + "profile", {}, { headers })
    .then(function (response) {
      if (response && response.status === 200) {
        const data = response.data.body;
        const dataUsername = response.data.body.userName;
        dispatch(setUser(data));
        dispatch(setUsername(dataUsername));
      }
    })

    .catch(function (error) {
      console.error(error);
      console.log(error.response);
    });
};

export const fetchUpdateUserName = (token, SetUsername, dispatch) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  console.log(headers, token);

  axios
    .put(URL + "profile", { userName: SetUsername }, { headers })
    .then(function (response) {
      console.log(response);

      console.log(SetUsername);

      // Dispatch seulement si le nom d'utilisateur est disponible
      if (SetUsername) {
        dispatch(setUsername(SetUsername));
        console.log(SetUsername);
      } else {
        console.error("Veuillez entrer un nom d'utilisateur valide !");
      }
    })
    .catch(function (error) {
      console.error(error);
    });
};
