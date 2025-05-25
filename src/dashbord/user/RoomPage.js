import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom';

function RoomPage() {
    const [data, setdata] = useState(JSON.parse(localStorage.getItem('roomdata')) || []);

    console.log(data);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    {data && data.map((item) => (
                        <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                            <div className="card">
                                <img src={item.image} className="card-img-top room-img-size" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{item.roomname}</h5>
                                    <p className="card-text">{item.facilities}</p>
                                    <p className="card-text">{item.decription}</p>
                                    <h5>{item.price}</h5>
                                    <Link to={`/create-booking/${item.roomname}`} className="btn btn-primary">BOOK NOW</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default RoomPage
