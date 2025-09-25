import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    email: "",
    localId: "",
    profilePicture: "",
  },
  reducers: {
    setUserEmail: (state, action) => {
      state.email = action.payload;
    },
    setLocalId: (state, action) => {
      state.localId = action.payload;
    },
    setProfilePicture: (state, action) => {
      state.profilePicture = action.payload;
    },
  },
});

export const { setUserEmail, setLocalId, setProfilePicture } = userSlice.actions;

export default userSlice.reducer;
