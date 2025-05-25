import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import AdminNavBar from '../navigation/AdminNavBar'

function AdminLandingpage() {
  return (
    <Fragment>
      <AdminNavBar/>
      <Outlet />
    </Fragment>

  )
}

export default AdminLandingpage
