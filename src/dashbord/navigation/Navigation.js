import React from 'react'
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary nav-head">

        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <Link className="navbar-brand" href="#">Home</Link> */}

          <div className="hotel-logo">
            <img className="logo-icon" src="https://theworldhotels.in/img/world-logo.png" alt="" />
          </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/my-bookings' className="nav-link active" aria-current="page">My Booking</Link>
              </li>
 {/* 
//               <li className="nav-item">
//                 <Link to='/user-login' className="nav-link active" aria-current="page">User Login</Link>
//               </li> */}
            </ul>

            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false"><img className="logout-icon" src="images/login.png" alt="" /></Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="/adminlogin">Admin Login</Link></li>
                    <li><Link className="dropdown-item" to="/user-login">User Login</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item">Logout</Link></li>
                  </ul>
                </li>
              </ul>
            </form>

             <button type="button" className="btn btn-warning mr"><Link to='/adminlogin'>Admin Login</Link></button>
            <button type="button" className="btn btn-warning mr"><Link to=''>Logout</Link></button> 
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navigation
