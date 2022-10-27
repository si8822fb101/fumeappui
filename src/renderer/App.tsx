import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import MainMessaging from './components/MainMessaging';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/main" element={<MainMessaging />} />
      </Routes>
    </Router>
  );
}
