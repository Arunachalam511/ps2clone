import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  name: string;
  email: string;
  password: string;
}

interface SignupState {
  usersData: User[];
}

const initialState: SignupState = {
  usersData: [],
};



const signupSlice = createSlice({
    name: 'signup',
    initialState,
    reducers: {
      addUser: (state, action: PayloadAction<User>) => {
        state.usersData = [...state.usersData, action.payload];
      },
    },
  });
  

export const { addUser } = signupSlice.actions;
export default signupSlice.reducer;
