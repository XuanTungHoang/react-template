import { LoginResponse } from '@api/auth';
import { useAppDispatch, useAppSelector } from '@redux/configureStore';
import { getUser } from '@redux/selector';
import { removeUser, setUser, UserState } from '@redux/User/reducer';
import { localStorageHelper } from '@utils';
import React, { createContext } from 'react';

export interface AuthContextType {
  user: unknown;
  signin: (loginResponse: LoginResponse, callback: VoidFunction) => void;
  signout: (callback: VoidFunction) => void;
  token: string | null;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  token: null,
  signin: () => undefined,
  signout: () => undefined,
});

function AuthProvider({ children }: { children: React.ReactNode }) {
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const signin = (loginResponse: LoginResponse, callback: VoidFunction) => {
    try {
      /**
     * Còn Update
     */
    const loginUser: UserState = {token: loginResponse.token }
   
    dispatch(setUser(loginUser));
    localStorageHelper.setItem('user', loginUser);
    localStorageHelper.setItem('token', loginResponse.token);
    callback && callback();
    } catch (error) {
      console.error(error);
      throw new Error("Đã có lỗi từ hệ thống!");
    }
  };

  const signout = (callback: VoidFunction) => {
    dispatch(removeUser());
    localStorageHelper.removeItem('user');
    localStorageHelper.removeItem('token');
    callback && callback();
  };

  const value = { user, signin, signout, token: user?.token || null };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
