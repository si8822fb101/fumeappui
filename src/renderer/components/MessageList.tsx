import { List } from 'semantic-ui-react';
import React from 'react';

export default function MessageList(props: any) {
  const { messages } = props;

  return (
    <div className="messageList">
      <List>
        {messages.map((message: any) => (
          <List.Item>
            <List.Content>
              <List.Header>{message.sender}</List.Header>
              <List.Description>{message.content}</List.Description>
            </List.Content>
          </List.Item>
        ))}
      </List>
    </div>
  );
}
