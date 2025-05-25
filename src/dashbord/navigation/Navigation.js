import React from 'react'
import { Link } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';


function Navigation() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
      
        <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand" href="#">Home</Link>
         
          <div className="hotel-logo">
      <img className="logo-icon" src="https://theworldhotels.in/img/world-logo.png" alt="" />
      </div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to='/' className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/my-bookings' className="nav-link active" aria-current="page">My Bookings</Link>
              </li>
              <li className="nav-item">
                <Link to='/adminhomepage' className="nav-link active" aria-current="page" href="#">Admin Home</Link>
              </li>
              <li className="nav-item">
                <Link to='/adminlogin' className="nav-link active" aria-current="page" href="#">Admin Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Link</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
          </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" href="#">Action</Link></li>
                  <li><Link className="dropdown-item" href="#">Another action</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" href="#">Something else here</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
              </li>
            </ul>

            <form className="d-flex" role="button">
              <button type="button" class="btn"><Link to='/login'><img className="img-icon" src="images/login.png" alt="" /></Link></button>
            </form>
            <form className="d-flex" role="button">
            <button type="button" className="btn btn-warning mr"><Link to='/'>BOOK</Link></button>
            </form>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navigation
