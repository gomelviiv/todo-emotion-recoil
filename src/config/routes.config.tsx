import IRouteElement from 'shared/interface/routes/route.interface';
import Dashboard from 'pages/Dashboard';
import Home from 'pages/Home';

export const ROUTES = {
  HOME: '/',
  DASHBOARD: '/dashboard',
};

export const INITIAL_ROUTES = ROUTES.DASHBOARD;

export const PUBLIC_ROUTES: IRouteElement[] = [
  {
    appTitle: 'Home',
    path: ROUTES.HOME,
    exact: true,
    element: Home,
  },
  {
    appTitle: 'Dashboard',
    path: ROUTES.DASHBOARD,
    exact: true,
    element: Dashboard,
  },
];

export const PRIVATE_ROUTES: IRouteElement[] = [];
