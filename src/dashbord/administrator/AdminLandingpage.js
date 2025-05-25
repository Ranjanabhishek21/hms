import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavBar from '../navigation/AdminNavBar'
import AdminHomepage from './AdminHomepage';

function AdminLandingpage() {
  return (
    <Fragment>
      <AdminNavBar/>
      <Outlet />
    </Fragment>

  )
}

export default AdminLandingpage
