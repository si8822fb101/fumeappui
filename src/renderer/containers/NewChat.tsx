import { Grid, Input, Form, Button, Icon } from 'semantic-ui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function NewChat(props: any) {
  const { addNewChat } = props;
  const [newUsername, setNewUsername] = useState('');
  const navigate = useNavigate();

  const createNewChat = (event: any) => {
    // const response = await fetch(`/api/newChat`, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ newUsername }),
    // });
    event.preventDefault();
    addNewChat(newUsername);
    navigate('/messaging', { state: { activeChat: newUsername } });
  };
  return (
    <Grid container>
      <Grid.Row>
        <h1>New Channel</h1>
      </Grid.Row>
      <Grid.Row>
        <Form>
          <Form.Input>
            <Input
              placeholder="Username"
              type="text"
              value={newUsername}
              onChange={(event) => setNewUsername(event.target.value)}
            />
          </Form.Input>
          <Button type="submit" onClick={createNewChat}>
            Add Username
          </Button>
        </Form>
      </Grid.Row>
    </Grid>
  );
}
