import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router';


function AdminHomepage() {
    const [room, setRoom] = useState({});
    const [roomdata, setRoomdata] = useState(JSON.parse(localStorage.getItem('roomdata')) || []);
const navigate = useNavigate();

    const getdata = (event) => {
        setRoom({
            ...room,
            [event.target.name]: event.target.value
        })
        console.log(room);
    }

    const addroom = () => {
roomdata.push(room);
localStorage.setItem('roomdata', JSON.stringify(roomdata));
alert('Room Details Successefully Added');
navigate('/roompage');
    }


    return (
        <Fragment>
            <div className='main-container'>
                <div>
                    <h2 className='head'>Add Room</h2>
            <input type='text' placeholder="Room Name" name='roomname' onInput={getdata} />
            <input type='text' placeholder='Facilities' name='facilities' onInput={getdata} />
            <input type='text' placeholder='Decription' name='decription' onInput={getdata} />
            <input type='number' placeholder='Price' name='price' onInput={getdata} />
            <input type='text' placeholder='image' name='image' onInput={getdata} />
            <button className='btn btn-warning' onClick={addroom}>Add Room</button>
           </div>
           </div>
        </Fragment>

    )
}

export default AdminHomepage
