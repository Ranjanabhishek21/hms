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
                            <div className="card containter-space">
                                <img src={item.image} className="card-img-top room-img-size" alt="..." />
                                <div className="card-body card-body-space">
                                    <h5 className="card-title">Room Name: {item.roomname}</h5>
                                    <p className="card-text para-text"><span className="text-bold">Facilities:</span> {item.facilities}</p>
                                    <p className="card-text para-text"><span className="text-bold">Description:</span> {item.decription}</p>
                                    <h6>Price: {item.price}</h6>
                                    <Link to={`/create-booking/${item.roomname}`} className="btn btn-warning card-body-book">BOOK NOW</Link>
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
