import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: 'user',
  initialState:{
      name:'',
      firstname:'',
      pseudo:'',
      token:'',
  },
  reducers:{
      setUser:(state,action) => {
          const {name, firstname, pseudo, token} = action.payload;
          state.name = name;
          state.firstname = firstname;
          state.pseudo = pseudo;
          state.token = token;
      }
  }
})

export const {setUser} = userSlice.actions;

export default userSlice.reducer;
