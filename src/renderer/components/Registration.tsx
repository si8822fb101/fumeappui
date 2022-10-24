import { FormEventHandler, useState } from 'react';
import { Button } from 'semantic-ui-react';
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
