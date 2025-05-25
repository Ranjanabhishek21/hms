import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function MyBookings() {

    const mobile = JSON.parse(localStorage.getItem('mobile'));
    const navigate = useNavigate();
    const bookingData = JSON.parse(localStorage.getItem('bookingdata')) || [];
    const my = bookingData.filter((item) => item.mobile == mobile.mobile);

    useEffect(() => {
        if (!mobile) {
            alert('Please Login First!');
            navigate('/user-login');
        }
    }, []);

  return (
    <Fragment>
        <h1>My Bookings</h1>
    </Fragment>
  )
}

export default MyBookings