import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const H1Home = styled.h1`
  font-family: Inter, sans-serif;
  font-size: 72px;
  font-weight: 700;
  line-height: 87px;
  letter-spacing: 0em;
  text-align: left;
  color: #5e5e5e;
`;

const PHome = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #5e5e5e;
`;

const ButtonHome = styled(Link)`
  background: #b47aea;
  border-radius: 15px;
  padding: 8px 15px;
  color: white;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin-top: 32px;
  border: 1px #b47aea solid;
  box-shadow: 2px 2px 8px #933ae7;
  text-decoration: none;

  &:hover {
    box-shadow: 0px 0px 20px #933ae7;
  }
`;

export { MainDiv, H1Home, PHome, ButtonHome };
