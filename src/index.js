import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import LandingPage from './dashbord/LandingPage';
import { BrowserRouter, Routes, Route } from 'react-router';
import HomePage from './dashbord/user/HomePage';
import RegisterPage from './dashbord/user/RegisterPage';
import LoginPage from './dashbord/user/LoginPage';
import AdminHomepage from './dashbord/administrator/AdminHomepage';
import AdminLoginpage from './dashbord/administrator/AdminLoginpage';
import AdminLandingpage from './dashbord/administrator/AdminLandingpage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/admin' element={<AdminLandingpage />}>
          <Route path='' element={<AdminHomepage />} />
        </Route>
        <Route path='/adminlogin' element={<AdminLoginpage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
