import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router';

function MyBookingPage() {
  const [data, setdata] = useState(JSON.parse(localStorage.getItem('bookingdata')) || []);
const navigate = useNavigate();


const changestatus = (index) => {
console.log(data[index].status);
data[index].status = 'confirm';
console.log(data[index].status);
localStorage.setItem('bookingdata', JSON.stringify(data));
navigate('/admin/mybookings');

}
  return (
    <Fragment>
      <div className='table-container'>
        <div>
          <h2 className='head'>My Booking Page</h2>
          <table className="table">
            <thead>
              <tr>
              <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">CheckIn</th>
                <th scope="col">CheckOut</th>
                <th scope="col">Guest</th>
                <th scope="col">RoomName</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {data && data.map((item, index) => (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.mobile}</td>
                  <td>{item.checkin}</td>
                  <td>{item.checkout}</td>
                  <td>{item.guest}</td>
                  <td>{item.roomname}</td>
                  <td>{item.status}</td>
                  <td><button className='btn btn-warning text-bold' onClick={() => changestatus(index)}>Confirm</button></td>
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