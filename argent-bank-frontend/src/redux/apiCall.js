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
      document.getElementById("errorLoginMessage").innerHTML = "";
      if (response && response.status === 200) {
        const responseData = response.data;
        console.log(response);
        const token = responseData.body.token;
        console.log(responseData.message);
        dispatch(setToken(token));

        if (token) {
          console.log("WIN");
          navigate("/profile");
        }
      }
    })

    .catch(function (error) {
      console.log(error);
      document.getElementById("errorLoginMessage").innerHTML =
        "Please check your login information and try again";
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

export const fetchUpdateUserName = (
  token,
  SetUsername,
  dispatch,
  closeModal
) => {
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  console.log(headers, token);
  if (SetUsername.trim() !== "") {
    document.getElementById("errorMessage").innerHTML = "";
    // Lance uniquement si le username est défini
    axios
      .put(URL + "profile", { userName: SetUsername }, { headers })
      .then(function (response) {
        console.log(response);

        console.log(SetUsername);
        dispatch(setUsername(SetUsername));
        closeModal(); // Fermer la modal Bootstrap après la mise à jour réussie
      })
      .catch(function (error) {
        console.error(error);
        // Vous pouvez afficher un message d'erreur dans la modal si nécessaire
      });
  } else {
    document.getElementById("errorMessage").innerHTML =
      "Please enter a valid username !";
  }
};
