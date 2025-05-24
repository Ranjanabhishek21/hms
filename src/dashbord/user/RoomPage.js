import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';

function RoomPage() {
    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                        <div className="card">
                            <img src="https://assets.oakshotels.com/image/upload/q_auto,f_auto,c_limit,w_1045/media/minor/oaks/images/australia/queensland/regional/cairns/600x400/hotel-room-internal/oaks-cairns-hotel-hotel-room-internal-2-600x400.jpg" className="card-img-top room-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Standard Room</h5>
                                <p className="card-text">The most basic and common room type, with minimal amenities.</p>
                                <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                        <div className="card">
                            <img src="https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg" className="card-img-top room-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Suite</h5>
                                <p className="card-text"> A larger, more luxurious room with multiple areas, such as a living room and bedroom.</p>
                                <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                        <div className="card">
                            <img src="https://www.wildhorseresort.com/wp-content/uploads/2024/12/HOTEL-PLATEAU-SUITE-WEB-BANNER.jpg" className="card-img-top room-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Executive Suite</h5>
                                <p className="card-text">A suite designed for business travelers, often with extra amenities and a larger workspace.</p>
                                <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-3 col-md-3 col-sm-6 col-12'>
                        <div className="card">
                            <img src="https://5.imimg.com/data5/SELLER/Default/2022/5/JD/KM/FF/24786878/hotel-furniture.jpg" className="card-img-top room-img-size" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Presidential Suite</h5>
                                <p className="card-text">The most luxurious and spacious suite, typically found in high-end hotels.</p>
                                <Link href="#" className="btn btn-primary">Go somewhere</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default RoomPage
