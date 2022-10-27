import { FormEventHandler, useState } from 'react';
import { Button, Input } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';

export default function Registration() {
  const [username, setUsername] = useState('');
  const [pin, setPin] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleRegistration = (event: any) => {
    event.preventDefault();
    setMessage(`Username logged in: ${username}`);
    navigate('/main');
  };

  return (
    <div>
      <h1>FUME</h1>
      <h2>Register</h2>
      <p>Create Account</p>
      <Input
        placeholder="Username"
        type="text"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <Input
        placeholder="Pin"
        type="password"
        value={pin}
        onChange={(event) => setPin(event.target.value)}
      />
      <Button
        onClick={() => {
          navigate('/main');
        }}
      >
        Create account
      </Button>
    </div>
  );
}
