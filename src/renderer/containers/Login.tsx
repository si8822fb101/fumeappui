import { FormEventHandler, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Grid } from 'semantic-ui-react';
import UserContext from '../contexts/UserContext';

export default function Login() {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const handleLogin = (event: any) => {
    event.preventDefault();
    context.login({
      isLoggedIn: true,
      username,
    });
    navigate('/messaging');
  };

  return (
    <Grid container columns={1}>
      <Grid.Column>
        <Grid.Row>
          <h1>FUME</h1>
        </Grid.Row>
        <Grid.Row>
          <h2>Sign In</h2>
        </Grid.Row>
        <Grid.Row>
          <Button
            variant="primary"
            onClick={() => {
              navigate('/register');
            }}
            as="a"
          >
            Create Account
          </Button>
        </Grid.Row>
        <Grid.Row>
          <Input
            placeholder="Username"
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </Grid.Row>
        <Grid.Row>
          <Input
            placeholder="Pin"
            type="password"
            value={pin}
            onChange={(event) => setPin(event.target.value)}
          />
        </Grid.Row>
        <Grid.Row>
          <Button variant="primary" onClick={handleLogin}>
            Login
          </Button>
        </Grid.Row>
      </Grid.Column>
      {message.length !== 0 ? <p>Username logged in: {username}</p> : <></>}
    </Grid>
  );
}
