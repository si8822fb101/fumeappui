import React, { useEffect, useState } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';

function MessagePopup(props: any) {
  const { message, timeout } = props;
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, timeout);
  }, [timeout]);

  return (
    <Modal onClose={() => setOpen(false)} open={open}>
      <Modal.Content image>
        <p>Error occurred: {message}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button color="green" onClick={() => setOpen(false)}>
          OK
        </Button>
      </Modal.Actions>
    </Modal>
  );
}

export default MessagePopup;
