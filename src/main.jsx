// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Logins';
import Msg from './pages/Msg';
import Signup from './pages/Signup';
import Startscreen from './pages/Startscreen';
import Explore from './pages/Explore';
import Wikileak from './pages/Wikileak';
import Post from './pages/post';
import Settings from './pages/Settings';

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Startscreen />} />
        <Route path="/home" element={<App />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="messages" element={<Msg />} />
          <Route path="explore" element={<Explore />} />
          <Route path="wikileak" element={<Wikileak />} />
          <Route path="post" element={<Post />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);
