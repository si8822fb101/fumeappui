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
import { registerUser, loginUser, logoutUser, newChat } from '../api/api';
import MessagePopup from '../components/MessagePopup';

export default function Main() {
  const navigate = useNavigate();

  const [message, setMessage] = useState('');

  const [chats, setChats] = useState(Array<string>());

  const [user, setUser] = useState({
    isLoggedIn: false,
    username: 'User',
  });

  const clearMessage = () => {
    setMessage('');
  };

  const addErrorMessage = (errorMessage: string) => {
    setMessage(errorMessage);
  };

  const register = (data: any) => {
    registerUser(data.username, data.pin)
      .then((response) => {
        console.log(response);
        if (response.ok) {
          setUser({
            isLoggedIn: true,
            username: data.username,
          });
          navigate('/messaging');
          clearMessage();
        } else {
          addErrorMessage('Registration Failed');
        }
        return '';
      })
      .catch((err) => {
        addErrorMessage('Registration Failed');
        console.log(err);
      });
  };

  const login = (data: any) => {
    loginUser(data.username, data.pin)
      .then((response) => {
        if (response.ok) {
          setUser({
            isLoggedIn: true,
            username: data.username,
          });
          navigate('/messaging');
        } else {
          addErrorMessage('Login Failed');
        }
        return '';
      })
      .catch((err) => {
        addErrorMessage('Login Failed');
        console.log(err);
      });
  };

  const logout = (data: any) => {
    logoutUser(data.username)
      .then((response) => {
        if (response.ok) {
          setUser({
            isLoggedIn: false,
            username: '',
          });
          setChats([]);
          navigate('/');
        } else {
          addErrorMessage('Logout Failed');
        }
        return '';
      })
      .catch((err) => {
        addErrorMessage('Logout Failed');
        console.log(err);
      });
  };

  const addNewChat = (username: string) => {
    newChat(username)
      .then((response) => {
        if (response.ok) {
          setUser({
            isLoggedIn: false,
            username: '',
          });
          response
            .json()
            .then((data) => {
              if (data as boolean) {
                setChats((prevChats) => [...prevChats, username]);
                navigate('/messaging', { state: { activeChat: username } });
              } else {
                addErrorMessage('User does not exist');
              }
              return '';
            })
            .catch();
        } else {
          addErrorMessage('Failure to add chat');
        }
        return '';
      })
      .catch((err) => {
        addErrorMessage('Failure to add chat');
        console.log(err);
      });
  };

  return (
    <Grid style={{ height: '100vh' }}>
      <UserContext.Provider value={{ user, login, logout, register }}>
        {message.length !== 0 ? (
          <MessagePopup message={message} timeout={5000} />
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
                element={
                  <NewChat addNewChat={addNewChat} setMessage={setMessage} />
                }
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
