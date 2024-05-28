import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: 'Should not see this ',
    email: '',
    role: '',
  },

  reducers: {
    setUser: (state, action) => {
    console.log("got here")
    const { token, email, role } = action.payload;

      state.token = token;
      state.email = email;
      state.role = role;
      console.log(state.token);
      console.log(state.email);
      console.log(state.role);
    },
    clearUser: (state) => {
        state.token = ''
        state.email = '';
        state.role = '';
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;