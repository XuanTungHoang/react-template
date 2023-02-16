import { createSlice } from '@reduxjs/toolkit';
import { localStorageHelper } from '@utils';
export interface UserState {
  token: string;
}

const initialState: UserState = localStorageHelper.getItem('user');

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      return action.payload;
    },
    removeUser(state) {
      return null as any;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
