import React, { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PUBLIC_ROUTES } from './config/routes.config';
import PublicRoute from './routes/PublicRoute';

const AppRouter: React.FC = () => {
  const publicRoute = !!PUBLIC_ROUTES && !!PUBLIC_ROUTES.length;

  return (
    <Routes>
      {publicRoute &&
        PUBLIC_ROUTES.map(
          (routeProps): ReactNode => (
            <Route
              key={routeProps.path}
              path={routeProps.path}
              element={
                <PublicRoute appTitle={routeProps.appTitle}>
                  <routeProps.element />
                </PublicRoute>
              }
            />
          ),
        )}
    </Routes>
  );
};

export default AppRouter;
