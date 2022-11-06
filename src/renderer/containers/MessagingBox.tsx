import React, { useContext, useState } from 'react';
import { Button, Grid, Icon, Input, List, Segment } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import MessageList from '../components/MessageList';
import userContext from '../contexts/UserContext';

export default function MessagingBox(props: any) {
  const { state } = useLocation();
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState([{}]);
  const chatUser = state === null ? 'User 1' : state.recipient;
  const context = useContext(userContext);

  const sendMessage = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: context.user.username, content: newMessage },
    ]);
  };

  return (
    <Grid container columns={1}>
      <Grid.Column width={16} />
      <Grid.Row columns={1}>
        <h1>Chat with {chatUser}</h1>
      </Grid.Row>
      <Grid.Row columns={1}>
        <Grid.Column width={16}>
          <MessageList messages={messages} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        <Grid.Column width={12}>
          <Input
            type="text"
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
        </Grid.Column>
        <Grid.Column width={2}>
          <Button>
            <Icon name="upload" />
          </Button>
        </Grid.Column>
        <Grid.Column width={2}>
          <Button onClick={sendMessage}>Send</Button>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
