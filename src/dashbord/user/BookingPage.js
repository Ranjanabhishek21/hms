import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function BookingPage() {
    const { id } = useParams();
    console.log(id);
    const [data, setdata] = useState(JSON.parse(localStorage.getItem('roomdata')));
    const [roomData, setRoomData] = useState({});
    const [count, setCount] = useState(1);
    const getRoomData = () => {
        const result = data.filter((item) => item.roomname == id);
        setRoomData(result[0]);
        console.log(result);
    }
    const [myBooking, setMyBooking] = useState({});
    const mobile = JSON.parse(localStorage.getItem('mobile'));
    const navigate = useNavigate();

    const bookingData = JSON.parse(localStorage.getItem('bookingdata')) || [];

    const getData = (event) => {
        setMyBooking({
            ...myBooking,
            [event.target.name]: event.target.value
        })
        console.log(myBooking);
    };

    const createBooking = () => {
        myBooking.roomname = roomData.roomname;
        myBooking.price = roomData.price * count;
        myBooking.status = 'Pending';
        myBooking.mobile = mobile.mobile;
        myBooking.name = mobile.name;
        console.log(myBooking);
        bookingData.push(myBooking);
        localStorage.setItem('bookingdata', JSON.stringify(bookingData));
        alert('Booking Successfull!');
        navigate('/my-bookings');
    }

    useEffect(() => {
        getRoomData();
        if (!mobile) {
            navigate('/user-login');
        }
    }, [])

    return (
        <Fragment>
            <div className='row room-container'>
                <h2 className='head'>Booking Page</h2>
                <div className="col-sm-6 col-md-6 col-lg-6 img_container">
                    <img src={roomData.image} className="card-img-top room-img-size" alt="..." width={300} height={200} />
                    <p><b>Room Type:</b> {roomData.roomname}</p>
                    <p><b>Facilities:</b> {roomData.facilities}</p>
                    <p><b>Decription:</b> {roomData.decription}</p>
                    <p><b>Price:</b> {roomData.price}</p>
                </div>
                <div className='col-sm-6 col-md-6 col-lg-6 room-page'>
                    <label>Checkin date</label>
                    <input type='date' onInput={getData} name='checkin' />
                    <label>Checkout date</label>
                    <input type='date' onInput={getData} name='checkout' />
                    <label>Guest</label>
                    <input type='number' onInput={getData} name='guest' />
                    <label>Children</label>
                    <input type='number' onInput={getData} name='children' />
                    <label> Select no of Rooms</label>
                    <div className="btn-design">
                        <button className='btn btn-warning' onClick={() => setCount(count - 1)}>-</button>
                        <span>{count}</span>
                        <button className='btn btn-warning' onClick={() => setCount(count + 1)}>+</button>
                    </div>
                </div>
                
            </div>
            <div className='mybook-button'>
                <button className='btn btn-warning book-button' onClick={createBooking}>BOOK NOW</button>
            </div>
        </Fragment>
    )
}

export default BookingPage