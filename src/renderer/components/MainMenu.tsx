import { Icon, Sidebar, Menu, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function MainMenu(props: any) {
  const { chats, setActiveChat } = props;
  const navigate = useNavigate();
  const onMenuItemClick = (e, { name }) => {
    navigate('/messaging');
  };
  const menuItems = chats.map((user: string) => {
    return (
      <Menu.Item name={user} onClick={onMenuItemClick}>
        {user}
      </Menu.Item>
    );
  });

  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
      color="teal"
    >
      <Menu.Item>
        <h1>FUME</h1>
      </Menu.Item>
      <Menu.Item as={Link} to="/settings">
        Settings
      </Menu.Item>
      <Menu.Header>Direct Messages</Menu.Header>
      <Menu.Menu>
        <Menu.Item as={Link} to="/newChat">
          + Add New Chat
        </Menu.Item>
        {menuItems}
      </Menu.Menu>
    </Sidebar>
  );
}
