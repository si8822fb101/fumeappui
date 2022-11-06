import { createContext } from 'react';

const UserContext = createContext({
  user: {
    isLoggedIn: false,
    username: '',
  },
  login(data: any) {},
  logout(data: any) {},
});

export default UserContext;
