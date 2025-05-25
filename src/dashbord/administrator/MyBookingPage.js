import React, { Fragment, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function MyBookingPage() {
  const mobile = JSON.parse(localStorage.getItem('mobile'));
  const navigate = useNavigate();
  const bookingData = JSON.parse(localStorage.getItem('bookingdata')) || [];
  const [mybookings, setmybookings] = useEffect();

  useEffect(() => {
    const result = bookingData.filter((item) => item.mobile == mobile.mobile);
    setmybookings(result);
  }, []);

  useEffect(() => {
      if (!mobile) {
          alert('Please Login First!');
          navigate('/user-login');
      }
  }, []);
  return (
    <Fragment>
        <h1>My Booking Page</h1>
        {
          mybookings && mybookings.map((item) => (
            <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                <div className="card">
                    <img src={item.image} className="card-img-top room-img-size" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{item.roomname}</h5>
                        <p className="card-text">{item.facilities}</p>
                        <p className="card-text">{item.decription}</p>
                        <h5>{item.price}</h5>
                    </div>
                </div>
            </div>
          ))
        }
    </Fragment>
  )
}

export default MyBookingPage