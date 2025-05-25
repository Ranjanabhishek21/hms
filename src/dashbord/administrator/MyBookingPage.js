import React, { Fragment, useState } from 'react'



function MyBookingPage() {
  const [mybooking, setMybooking] = useState();
  const [roomdata, setRoomdata] = useState(JSON.parse(localStorage.getItem('roomdata')));
console.log(roomdata);

  

  

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

              </tr>
            </thead>
            <tbody>
              <tr>



              </tr>
            </tbody>


          </table>
        </div>
      </div>
    </Fragment>
  )
}

export default MyBookingPage