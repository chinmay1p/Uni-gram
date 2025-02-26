// src/App.jsx
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Navbar from './pages/Navbar';

const App = () => {
  return (
    <div >
      {/* style={{display:'flex'}} */}
      <Navbar />
      <div className="ml-64">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
