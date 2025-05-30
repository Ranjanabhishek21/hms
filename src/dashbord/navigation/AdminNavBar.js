import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

function AdminNavBar() {
    return (
        <Fragment>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Navbar</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to=''>Admin Home</Link>
                            </li>
                            
                                    <li className="nav-item">
                            <Link className="nav-link" to='/admin/mybookings'>My Booking</Link>
                        </li>
                        <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/admin/myroompage'>My Rooms</Link>
                            </li>
                       
                        </ul>
                    </div>
                </div >
            </nav >
        </Fragment >
    )
}

export default AdminNavBar