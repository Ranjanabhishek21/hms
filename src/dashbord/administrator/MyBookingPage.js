import React, { Fragment, useState } from 'react'

function MyBookingPage() {
  const [data, setdata] = useState(JSON.parse(localStorage.getItem('bookingdata')) || []);

  return (
    <Fragment>
      <div className='main-container'>
        <div>
          <h2 className='head'>My Booking Page</h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Checkin</th>
                <th scope="col">CheckOut</th>
                <th scope="col">Guest</th>
                <th scope="col">Roomname</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.checkin}</td>
                  <td>{item.checkout}</td>
                  <td>{item.guest}</td>
                  <td>{item.roomname}</td>
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

export default MyBookingPage