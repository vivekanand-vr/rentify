import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  userData: {
    status: '',
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    phoneNumber: '',
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.isLoggedIn = true;
      state.userData = action.payload;
    },
    userLogout: () => {
      return initialState;
    }
  },
});

export const { userLogin, userLogout } = userSlice.actions;

export default userSlice.reducer;
