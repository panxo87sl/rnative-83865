import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  // demo@coder.com
  initialState: {
    email: "",
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

export const { setUserEmail } = userSlice.actions;

export default userSlice.reducer;
