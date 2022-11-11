import { Grid, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import userContext from '../contexts/UserContext';

export default function Settings(props) {
  const context = useContext(userContext);
  const navigate = useNavigate();
  const userLogout = () => {
    context.logout({
      username: context.user.username,
    });
  };

  return (
    <Grid container columns={1}>
      <Grid.Row>
        <h1>User Profile</h1>
      </Grid.Row>
      <Grid.Row>
        <Button onClick={userLogout}>Logout</Button>
      </Grid.Row>
      <Grid.Row />
      <Grid.Row />
    </Grid>
  );
}
