import React, { ReactElement } from 'react';

interface Props {
  children: ReactElement;
  appTitle: string;
}

const PublicRoute: React.FC<Props> = ({ children, appTitle }) => {
  // TODO: create auth logic
  return children;
};

export default PublicRoute;
