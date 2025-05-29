import React, { Fragment } from 'react'
import SliderPage from './SliderPage';
import RoomPage from './RoomPage';
import FooterPage from './FooterPage';

export default function HomePage() {
    return (
        <Fragment>
            <SliderPage />
            <RoomPage />
            <FooterPage />
        </Fragment>
    )
}
