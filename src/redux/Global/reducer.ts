import { TLocation } from '@api/location';
import { createSlice } from '@reduxjs/toolkit';
export interface GobalState {
  themeMode: string;
}

const initialState: GobalState = {
  themeMode: 'dark',

};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setThemeMode(state, action) {
      return { ...state, themeMode: action.payload };
    },
   
  },
});

export const { setThemeMode } = globalSlice.actions;
export default globalSlice.reducer;
