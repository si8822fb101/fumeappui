import React, { useContext, useState, useRef, useEffect } from 'react';
import {
  Button,
  Confirm,
  Grid,
  Icon,
  Input,
  List,
  Segment,
  Form,
} from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import { ipcRenderer } from 'electron';
import { Value } from 'sass';
import { get } from 'lodash';
import MessageList from '../components/MessageList';
import userContext from '../contexts/UserContext';
import { getFileName } from '../util/FileHandler';

export default function MessagingBox(props: any) {
  const { state } = useLocation();
  const [newMessage, setNewMessage] = useState({});
  const [formMessage, setFormMessage] = useState('');
  const [messages, setMessages] = useState([{}]);
  const [newFile, setNewFile] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const chatUser = get(state, 'activeChat', '');
  const context = useContext(userContext);

  const updateMessages = () => {
    // get messages from api
    setMessages([{}]);
  };

  const sendMessage = () => {
    if (Object.keys(newFile).length !== 0) {
      setMessages((prevMessages) => [...prevMessages, newFile]);
    }
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setNewMessage({});
    setFormMessage('');
  };

  const fileUploadConfirm = () => {
    setConfirmationOpen(false);
    sendMessage();
    setNewFile({});
  };

  const fileUploadCancel = () => {
    setConfirmationOpen(false);
    setNewFile({});
  };

  const fileUploadClick = () => {
    window.electron.ipcRenderer.sendMessage('open-file-dialog-for-file', []);
  };

  const onMessageChange = (value) => {
    setNewMessage({ sender: context.user.username, content: value });
    setFormMessage(value);
  };

  useEffect(() => {
    window.electron.ipcRenderer.on(
      'selected-file',
      function (filePath: string) {
        setNewFile({
          sender: context.user.username,
          content: getFileName(filePath),
          path: filePath,
        });
        setConfirmationOpen(true);
      }
    );
    updateMessages();
  }, []);

  return (
    <Grid container columns={1} style={{ height: '100%' }}>
      <Grid.Row columns={1} style={{ height: '5%' }}>
        <h1>Chat with {chatUser}</h1>
      </Grid.Row>
      <Grid.Row columns={1} style={{ height: '90%' }}>
        <Grid.Column width={16}>
          <Segment style={{ height: '100%' }}>
            <MessageList messages={messages} style={{ overflow: 'auto' }} />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3} style={{ height: '5%' }}>
        <Grid.Column width={2}>
          <Confirm
            open={confirmationOpen}
            onCancel={fileUploadCancel}
            onConfirm={fileUploadConfirm}
          />
          <Button
            onClick={() => {
              fileUploadClick();
            }}
          >
            <Icon name="upload" />
          </Button>
        </Grid.Column>
        <Grid.Column width={12}>
          <Form onSubmit={sendMessage}>
            <Form.Field>
              <Form.Input
                type="text"
                value={formMessage}
                onChange={(event) => onMessageChange(event.target.value)}
              />
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
