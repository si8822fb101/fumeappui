import { useState } from 'react';
import { Input, Button, Segment, List } from 'semantic-ui-react';

export default function MainMessaging() {
  const [newMessage, setNewMessage] = useState('');
  const [messages, setMessages] = useState(['']);

  const sendMessage = () => {
    console.log(newMessage);
    const messagesCopy = messages;
    messagesCopy.push(newMessage);
    setMessages(messagesCopy);
  };

  return (
    <div id="mainMessagingContainer">
      <div id="mainMessagingDisplay">
        <Segment>
          <List>
            {messages.map((message) => (
              <List.Item>message</List.Item>
            ))}
          </List>
        </Segment>
      </div>
      <div id="sendMessageContainer">
        <Input
          type="text"
          value={newMessage}
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <Button onClick={sendMessage}>Send</Button>
      </div>
    </div>
  );
}
