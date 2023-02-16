import React, { useContext } from 'react';
import { Button, TextField } from '@mui/material';
import BannerImg from '@assets/images/banner.png';
import BannerImg2x from '@assets/images/@2x/banner@2x.png';
import BannerImg3x from '@assets/images/@3x/banner@3x.png';


function LoginContainer() {
  const navigate = useNavigate();


  const auth = useContext(AuthContext);

  const submitLogin = async ({ email, password }) => {
    try {
      const res = await login({ email, password });
      console.log({ res });
      try {
        auth.signin(res.data, () => {});
        if (res?.message === 'success') {
          toast.success(t('Đăng nhập thành công!'));
          navigate('/');
        }
      } catch (error: any) {
        console.error(error)
        toast.error(error.message)
      }
    } catch (error: any) {
      console.error(error);
      toast.error('Tài khoản chưa tồn tại hoặc sai thông tin đăng nhập');
    }
  };

  const onSubmit = (data) => {
    submitLogin({ email: data.email, password: data.password });
    // handleLogin(data);
  };

  if (auth.token) return <Navigate to={'/'} replace={true} />;

  return (
   
        <div className="grid grid-rows-2 gap-4">
          {/* login form here ! */}
        </div>
      
  );
}

export default LoginContainer;

import { Box } from '@mui/system';
import { login } from '@api/auth';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '@layouts/Auth/AuthProvider';
