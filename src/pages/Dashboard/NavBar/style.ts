import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Avatar, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const AppBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 10vw;
`;

const StyledBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ImagesAvatar = styled(Avatar)`
  width: 74px;
  height: 74px;
  margin-right: 10px;
`;

const BlockAvatarText = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextHiAvatar = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #5e5e5e;
`;

const TextTasksAvatar = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #ef6161;
`;

const TextTitle = styled.p`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 77px;

  color: #5e5e5e;
`;

const LinkLogout = styled(Link)`
  text-decoration: none;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #b47aea;
`;

export {
  AppBar,
  StyledBox,
  ImagesAvatar,
  BlockAvatarText,
  TextHiAvatar,
  TextTasksAvatar,
  TextTitle,
  LinkLogout,
};
