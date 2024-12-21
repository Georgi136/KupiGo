import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/page';
import LoginPage from './pages/auth/login/page';
import RegisterPage from './pages/auth/register/page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;
