import { Grid, Message } from 'semantic-ui-react';
import {
  MemoryRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import Login from './Login';
import Registration from './Registration';
import MainMenu from '../components/MainMenu';
import MessagingBox from './MessagingBox';
import Settings from './Settings';
import UserContext from '../contexts/UserContext';
import NewChat from './NewChat';
import { registerUser, loginUser, logoutUser } from '../api/api';

export default function Main() {
  // const [columns, setColumns] = useState(1);
  // const [mainWidth, setMainWidth] = useState(16);
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [chats, setChats] = useState([]);

  const [user, setUser] = useState({
    isLoggedIn: false,
    username: 'User',
  });

  const clearMessage = () => {
    setMessage('');
  };

  const register = (data: any) => {
    registerUser(data.username, data.pin).then((response) => {
      console.log(response);
      if (response.ok) {
        setUser({
          isLoggedIn: true,
          username: data.username,
        });
        navigate('/messaging');
        clearMessage();
      } else {
        setMessage('Registration Failed');
      }
    });
  };

  const login = (data: any) => {
    loginUser(data.username, data.pin).then((response) => {
      if (response.ok) {
        setUser({
          isLoggedIn: true,
          username: data.username,
        });
        navigate('/messaging');
        clearMessage();
      } else {
        setMessage('Login Failed');
      }
    });
  };

  const logout = (data: any) => {
    logoutUser(data.username).then((response) => {
      if (response.ok) {
        setUser({
          isLoggedIn: false,
          username: '',
        });
        setChats([]);
        navigate('/');
        clearMessage();
      } else {
        setMessage('Logout Failed');
      }
    });
  };

  const addNewChat = (username: string) => {
    setChats((prevChats) => [...prevChats, username]);
  };

  // const getUserMessages = (chatUsername) => {
  //   setMessages();
  // };

  useEffect(() => {
    setMessage('');
  }, []);

  return (
    <Grid style={{ height: '100vh' }}>
      <UserContext.Provider value={{ user, login, logout, register }}>
        {message.length !== 0 ? (
          <Grid.Row style={{ height: '20%' }}>
            <Grid.Column width={16}>
              <Message negative>
                <Message.Header>Error occurred</Message.Header>
                <p>Login Failed</p>
              </Message>
            </Grid.Column>
          </Grid.Row>
        ) : (
          <></>
        )}
        <Grid.Row style={{ height: '80%' }}>
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
              <Route
                path="/newChat"
                element={<NewChat addNewChat={addNewChat} />}
              />
              <Route
                path="/messaging"
                element={
                  chats.length < 1 ? (
                    <NewChat addNewChat={addNewChat} />
                  ) : (
                    <MessagingBox />
                  )
                }
              />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </UserContext.Provider>
    </Grid>
  );
}
