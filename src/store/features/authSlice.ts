import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface AuthState {
  auth: boolean;
}

const initialState: AuthState = {
  auth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<{ user: any }>) => {
      state.auth = true;
    },
  },
});

export const { setCredentials } = authSlice.actions;
export default authSlice.reducer;
