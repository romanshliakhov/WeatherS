import AuthorizationPage from '../pages/Authorization/AuthorizationPage';
import Main from '../pages/Main/Main';

export const mainRoutes = [
  {
    path: '/authorization',
    Component: AuthorizationPage,
  },
];

export const authRoutes = [
  {
    path: '/',
    Component: Main,
  },
];
