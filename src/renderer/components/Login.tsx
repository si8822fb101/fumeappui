import { FormEventHandler, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event: any) => {
    event.preventDefault();
    setMessage(`Username logged in: ${username}`);
  };

  return (
    <div>
      <h1>FUME</h1>
      <h2>Sign In</h2>
      <Button
        variant="primary"
        onClick={() => {
          navigate('/register');
        }}
      >
        Create Account
      </Button>
      <Input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        placeholder="Username"
        type="text"
        value={pin}
        onChange={(event) => setPin(event.target.value)}
      />
      <Button variant="primary" onClick={handleLogin}>
        Login
      </Button>
      {message.length !== 0 ? <p>Username logged in: {username}</p> : <></>}
    </div>
  );
}
