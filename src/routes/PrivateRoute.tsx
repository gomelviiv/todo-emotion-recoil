import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  appTitle: string;
}

const PrivateRoute: React.FC<Props> = ({ children, appTitle }) => {
  // TODO: create auth logic
  return <div>PrivateRoute</div>;
};

export default PrivateRoute;
