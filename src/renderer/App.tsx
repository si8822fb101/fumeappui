import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './containers/Main';

export default function App() {
  return (
    <Router>
      <Main />
    </Router>
  );
}
