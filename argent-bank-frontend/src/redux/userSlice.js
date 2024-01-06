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
      const { name, firstname, pseudo } = action.payload;
      state.name = name;
      state.firstname = firstname;
      state.pseudo = pseudo;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setUsername: (state, action) => {
      state.user.userName = action.payload;
    },
  },
});

export const { setUser, setToken } = userSlice.actions;

export default userSlice.reducer;
