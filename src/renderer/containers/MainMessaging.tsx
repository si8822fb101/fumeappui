import { useState } from 'react';
import {
  Input,
  Button,
  Segment,
  List,
  Grid,
  GridColumn,
  Icon,
  Sidebar,
  Menu,
  Label,
} from 'semantic-ui-react';

import { Link, Route } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import MessagingBox from './MessagingBox';
import Settings from './Settings';
import AppRouter from '../components/AppRouter';
import MainMenu from '../components/MainMenu';

export default function MainMessaging() {
  const [activeRecipient, setActiveRecipient] = useState('');
  const [recipients, setRecipients] = useState(['User 1', 'User 2']);

  return (
    <Grid container columns={2}>
      <Grid.Column width={4}>
        <MainMenu />
      </Grid.Column>
      <Grid.Column width={12}>
        <Route path="/messaging" element={<MessagingBox />} />
        <Route path="/settings" element={<Settings />} />
      </Grid.Column>
    </Grid>
  );
}
