import React, { Fragment } from 'react'
import Navigation from './navigation/Navigation';
import { Outlet } from 'react-router';

function LandingPage() {
    return (
        <Fragment>
            <Navigation />
            <Outlet />
        </Fragment>
    )
}

export default LandingPage
