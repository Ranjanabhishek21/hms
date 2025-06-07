import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function AdminLoginpage() {

  const [data, setdata] = useState({});
  const navigate = useNavigate();

  const getdata = (event) => {
    setdata({
      ...data,
      [event.target.name]: event.target.value
    })
    console.log(data);
  }

  const handleLogin = () => {
    if (data.name == 'admin' && data.password == '123')
      alert('Login Successfull');
    navigate('/admin');
  }
  return (
    <Fragment>
      <div className='main-container'>
        <div>
          <h2 className='head'>Admin Login</h2>
          <input type="text" placeholder='Name' name='name' onInput={getdata} />
          <input type="password" placeholder='Password' name='password' />
          <button className='btn btn-warning' onClick={handleLogin}>Admin</button>
        </div>
      </div>
    </Fragment>
  )
}

export default AdminLoginpage
