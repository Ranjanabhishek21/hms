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
    if(data.name == 'admin' && data.password == '123')
    alert('Login Successfull');
    navigate('/admin');
  }
  return (
    <Fragment>
      <input type="text" placeholder='username' name='name' onInput={getdata} />
      <input type="password" placeholder='Password' name='password' />
      <button onClick={handleLogin}>Admin</button>
    </Fragment>
  )
}

export default AdminLoginpage
