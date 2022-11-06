import { Grid } from 'semantic-ui-react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import MainMenu from '../components/MainMenu';
import MessagingBox from './MessagingBox';
import Settings from './Settings';
import UserContext from '../contexts/UserContext';
import NewChat from './NewChat';

export default function Main() {
  // const [columns, setColumns] = useState(1);
  // const [mainWidth, setMainWidth] = useState(16);
  const [chats, setChats] = useState(['User 1', 'User 2']);

  const [user, setUser] = useState({
    isLoggedIn: false,
    username: 'User',
  });

  const login = (data: any) => {
    setUser(data);
  };

  const logout = (data: any) => {
    setUser(data);
  };

  const addNewChat = (username: string) => {
    setChats((prevChats) => [...prevChats, username]);
  };

  return (
    <Router>
      <Grid container columns={2}>
        <UserContext.Provider value={{ user, login, logout }}>
          {user.isLoggedIn ? (
            <Grid.Column width={4}>
              <MainMenu chats={chats} />
            </Grid.Column>
          ) : (
            <></>
          )}
          <Grid.Column width={12}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Registration />} />
              <Route path="/messaging" element={<MessagingBox />} />
              <Route path="/settings" element={<Settings />} />
              <Route
                path="/newChat"
                element={<NewChat addNewChat={addNewChat} />}
              />
            </Routes>
          </Grid.Column>
        </UserContext.Provider>
      </Grid>
    </Router>
  );
}
