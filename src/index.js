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
import MyBookingPage from './dashbord/administrator/MyBookingPage';
import BookingPage from './dashbord/user/BookingPage';
import MyBookings from './dashbord/user/MyBookings';
import RoomPage from './dashbord/user/RoomPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />}>
          <Route path='' element={<HomePage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/create-booking/:id' element={<BookingPage />} />
          <Route path='/user-login' element={<LoginPage />} />
          <Route path='/my-bookings' element={<MyBookings />} />
          <Route path='/roompage' element={<RoomPage />} />
        </Route>

        <Route path='/adminlogin' element={<AdminLoginpage />} />

        <Route path='/admin' element={<AdminLandingpage />}>
          <Route path='' element={<AdminHomepage />} />
          <Route path='/admin/mybookings' element={<MyBookingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
