import React, { Fragment, useState } from 'react'

function AdminHomepage() {
    const [room, setRoom] = useState({});
    const [roomdata, setRoomdata] = useState(JSON.parse(localStorage.getItem('roomdata')) || []);


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
alert('Room detail edit');
    }


    return (
        <Fragment>
            <h1>Add Room</h1>
            <input type='text' placeholder="Room Name" name='roomname' onInput={getdata} />
            <input type='text' placeholder='Facilities' name='facilities' onInput={getdata} />
            <input type='text' placeholder='Decription' name='decription' onInput={getdata} />
            <input type='number' placeholder='Price' name='price' onInput={getdata} />
            <input type='text' placeholder='image' name='image' onInput={getdata} />
            <button onClick={addroom}>Add Room</button>
        </Fragment>

    )
}

export default AdminHomepage
