import { List } from 'semantic-ui-react';
import React from 'react';
import { get } from 'lodash';
import { getParentDirectory } from '../util/FileHandler';

export default function MessageList(props: any) {
  const { messages } = props;

  const openFileInFolderExplorer = (filePath) => {
    window.electron.ipcRenderer.sendMessage(
      'open-folder-dialog',
      getParentDirectory(filePath)
    );
  };

  return (
    <List>
      {messages.map((message: any) => (
        <List.Item>
          <List.Content>
            <List.Header>{message.sender}</List.Header>
            {get(message, 'path', undefined) !== undefined ? (
              <List.Description>
                <a
                  onClick={() => {
                    openFileInFolderExplorer(message.path);
                  }}
                >
                  {message.content}
                </a>
              </List.Description>
            ) : (
              <List.Description>{message.content}</List.Description>
            )}
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}
