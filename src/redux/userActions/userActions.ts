import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../redux/userActions/store";
import { useSelector } from "react-redux";

interface LoginState {
  email: string;
  password: string;
  name?: string; 
}

const initialState: LoginState = {
  email: "",
  password: "",
};

export const loginAsync = createAsyncThunk(
  "user/loginAsync",
  async (loginData: LoginState, { getState }) => {
    const state = getState() as RootState;
    const { email, password } = loginData;
    const { usersData } = state.registeredUsers;
    const user = usersData.find((user) => user.email === email);

    if (user && user.password === password) {
      console.log(user.name);
      console.log(loginData);
        loginData.name = user.name;
      return loginData;
    } else {
      throw new Error("Invalid email or password");
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.name = action.payload.name; // Set the name field in the state
    });
    builder.addCase(loginAsync.rejected, (state) => {
      state.email = "";
      state.password = "";
      state.name = undefined; // Reset the name field in the state
    });
  },
});

export default userSlice.reducer;
