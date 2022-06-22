import React from 'react';
import { MainDiv, H1Home, PHome, ButtonHome } from './style';

const Home: React.FC = ({}) => {
  return (
    <MainDiv>
      <H1Home>TaskDo </H1Home>
      <PHome>Manage You Task Checklist Easily</PHome>
      <ButtonHome to={`/dashboard`}>Lets Start</ButtonHome>
    </MainDiv>
  );
};

export default Home;
