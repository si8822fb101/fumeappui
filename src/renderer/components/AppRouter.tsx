import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Settings from '../containers/Settings';
import MessagingBox from '../containers/MessagingBox';

export default function AppRouter() {
  return (
    <div>
      <Route path="/messaging" element={<MessagingBox />} />
      <Route path="/settings" element={<Settings />} />
    </div>
  );
}
