import React from 'react';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';
import { Global } from '@emotion/react';

import { globalStyles } from './styles/global';
import AppRouter from './AppRouter';

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <BrowserRouter>
        <RecoilRoot>
          <AppRouter />
        </RecoilRoot>
      </BrowserRouter>
    </>
  );
};

export default App;
