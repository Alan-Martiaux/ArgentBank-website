import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,

    user: {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      userName: "",
    },
  },
  reducers: {
    // Reducer pour mettre à jour les informations utilisateur
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    // Reducer pour mettre à jour le token utilisateur
    setToken: (state, action) => {
      state.token = action.payload;
    },
    // Reducer pour mettre à jour le nom d'utilisateur
    setUsername: (state, action) => {
      state.user.userName = action.payload;
    },
    // Reducer pour gérer la déconnexion (vider le token)
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { setUser, setToken, setUsername, logout, setError } =
  userSlice.actions;

export default userSlice.reducer;
