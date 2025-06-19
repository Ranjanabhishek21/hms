import React, { Fragment, use, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function RoomPage() {
    const [data, setdata] = useState(JSON.parse(localStorage.getItem('roomdata')) || []);
    const [currentPage, setcurrentPage] = useState();
    const [postPage, setpostPage] = useState(3);

    const lastPostIndex = currentPage * postPage;
    const firstPostIndex = lastPostIndex - postPage;
    const currentPost = data.slice(firstPostIndex, lastPostIndex);
    const length = data.length;
    console.log('length', length);
    const pagination = Math.ceil(length / 4);
    console.log('pagination', pagination);
    const [pages, setPages] = useState([]);
    
    useEffect(() => {
        const pages = [];
        for (let i = 1; i <= pagination; i++) {
            pages.push(i);
        }
        setPages(pages);
    }, [pagination]);

    console.log('pages', pages);
    const [start, setstart] = useState(0);
    const [end, setend] = useState(start + 4);

    return (
        <Fragment>
            <div className='container-fluid'>
                <div className='row'>
                    {data && data.slice(start, end).map((item) => (
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

            {pages.map((page, index) => {
                return <button key={index} onClick={() => setstart((page - 1) * 4)}>{page}</button>
            })}

        </Fragment>
    )
}

export default RoomPage
