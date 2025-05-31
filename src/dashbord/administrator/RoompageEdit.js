import React, { Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function RoompageEdit() {
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('roomdata')));
    const [newroom, setNewroom] = useState();
    const [facility, setFacility] = useState();
    const [des, setDes] = useState();


    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const updates = () => {
        room[id].roomname = newroom;
        room[id].facilities = facility;
        room[id].decription = des;
        localStorage.setItem('roomdata', JSON.stringify(room));
        alert('Room data save');
        navigate('/admin/myroompage');
    }

    return (
        <Fragment>
            <input type="text" placeholder="room name" value={room[id].roomname} onInput={(item) => setNewroom(item.target.value)} />
            <input type="text" placeholder="facilities" value={room[id].facilities} onInput={(item) => setFacility(item.target.value)} />
            <input type="text" placeholder="decription" value={room[id].decription} onInput={(item) => setDes(item.target.value)} />
            <button onClick={updates}>SAVE</button>

        </Fragment>

    )
}

export default RoompageEdit
