import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function MyBookings() {
  const [data, setdata] = useState(JSON.parse(localStorage.getItem('roomdata')) || []);
  console.log(data);
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
      <div className='table-container'>
        <div>
          <h2 className='head'>My Booking Page</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">ROOM NAME</th>
                <th scope="col">FACILITIES</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">PRICE</th>
                <th scope="col">STATUS</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.roomname}</td>
                  <td>{item.facilities}</td>
                  <td>{item.decription}</td>
                  <td>{item.price}</td>
                  <td>{item.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  )
}

export default MyBookings