import useInjectLocales from '@hooks/useInjectLocales';
import AuthProvider from '@layouts/Auth/AuthProvider';
import ProtectedRoute from '@layouts/Auth/ProtectedRoute';
import MainWrapper from '@layouts/MainWrapper';
import {
  createHashRouter, Navigate, RouteObject, RouterProvider
} from 'react-router-dom';
import AboutPage from './About';
import Login from './Login';

import ErrorBoundary from './ErrorBoudary';
import ErrorPage from './ErrorPage';



export const declareRouter: RouteObject[] = [
  {
    element: <ProtectedRoute children={<MainWrapper />} />,
    children: [
      {
        path: '/',
        element: <Navigate to={'/home'} replace={true} />,
      },
      { path: '/about', element: <AboutPage /> },
    ],
    errorElement: <ErrorBoundary />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/404',
    element: <ErrorPage />,
  },
  //   {
  //     path: '/register',
  //     element: <Register />,
  //   },
];

const router = createHashRouter(declareRouter);
function MainRoute() {
  const { injected } = useInjectLocales();

  return (
    <AuthProvider>{injected && <RouterProvider router={router} />}</AuthProvider>
  );
}

export default MainRoute;
