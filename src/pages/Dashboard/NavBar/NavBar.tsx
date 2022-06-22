import * as React from 'react';
import { Todo } from 'shared/interface/routes/recoil/todo.interface';
import {
  ImagesAvatar,
  StyledBox,
  BlockAvatarText,
  TextHiAvatar,
  TextTasksAvatar,
  AppBar,
  TextTitle,
  LinkLogout,
} from './style';

interface Props {
  todoList: Todo[];
  logout: () => void;
}

const NavBar: React.FC<Props> = ({ todoList, logout }) => {
  return (
    <AppBar>
      <StyledBox>
        <ImagesAvatar alt="Remy Sharp" src="assets/avatar.png" />
        <BlockAvatarText>
          <TextHiAvatar>Hi Shobhit 👋🏽</TextHiAvatar>
          <TextTasksAvatar>{!!todoList && todoList.length} tasks pending</TextTasksAvatar>
        </BlockAvatarText>
      </StyledBox>
      <TextTitle>TaskDo</TextTitle>
      <LinkLogout to="/" onClick={logout}>
        Logout
      </LinkLogout>
    </AppBar>
  );
};
export default NavBar;
