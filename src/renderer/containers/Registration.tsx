import { FormEventHandler, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button, Grid, Form } from 'semantic-ui-react';
import userContext from '../contexts/UserContext';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const userData = useContext(userContext);
  const handleRegistration = (event: any) => {
    event.preventDefault();
    userData.register({
      username,
      pin,
    });
  };

  return (
    <Grid container columns={1}>
      <Grid.Column verticalAlign="middle">
        <Grid.Row>
          <h1>FUME</h1>
        </Grid.Row>
        <Grid.Row>
          <h2>Register</h2>
        </Grid.Row>
        <Grid.Row>
          <p>Create Account</p>
        </Grid.Row>
        <Grid.Row>
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
            <Button onClick={handleRegistration}>Create account</Button>
          </Form>
        </Grid.Row>
      </Grid.Column>
    </Grid>
  );
}
