import { FormEventHandler, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Grid, Form } from 'semantic-ui-react';
import UserContext from '../contexts/UserContext';
import { loginUser } from '../api/api';

export default function Login() {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();
  const context = useContext(UserContext);

  const handleLogin = (event: any) => {
    event.preventDefault();
    context.login({
      username,
      pin,
    });
  };

  return (
    <Grid container columns={1} verticalAlign="middle">
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
        <Form>
          <Form.Field>
            <Input
              placeholder="Username"
              type="text"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </Form.Field>
          <Form.Field>
            <Input
              placeholder="Pin"
              type="password"
              value={pin}
              onChange={(event) => setPin(event.target.value)}
            />
          </Form.Field>
          <Button onClick={handleLogin}>Login</Button>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
