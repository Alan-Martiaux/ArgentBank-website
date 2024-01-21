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
    setUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUsername: (state, action) => {
      state.user.userName = action.payload;
    },
    logout: (state) => {
      state.token = "";
    },
  },
});

export const { setUser, setToken, setUsername, logout, setError } =
  userSlice.actions;

export default userSlice.reducer;
