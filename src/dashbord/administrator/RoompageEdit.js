import React, { Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

function RoompageEdit() {
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('roomdata')));
    const [newroom, setNewroom] = useState();
    const [facility, setFacility] = useState();
    const [des, setDes] = useState();
    const [roomprice, setRoomPrice] = useState();

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id);

    const updates = () => {
        room[id].roomname = newroom;
        room[id].facilities = facility;
        room[id].decription = des;
        room[id].price = roomprice;
        localStorage.setItem('roomdata', JSON.stringify(room));
        alert('Update Room Record');
        navigate('/admin/myroompage');
    }

    return (
        <Fragment>
            <div className='main-container'>
                <div>
                    <h2 className='head'>Rooms Details Update</h2>
                    <input type="text" placeholder="Room Name" value={room[id].roomname} onInput={(item) => setNewroom(item.target.value)} />
                    <input type="text" placeholder="Facilities" value={room[id].facilities} onInput={(item) => setFacility(item.target.value)} />
                    <input type="text" placeholder="Decription" value={room[id].decription} onInput={(item) => setDes(item.target.value)} />
                    <input type="text" placeholder="Price" value={room[id].price} onInput={(item) => setRoomPrice(item.target.value)} />
                    <button className='btn btn-warning' onClick={updates}>SAVE</button>
                </div>
            </div>
        </Fragment>

    )
}

export default RoompageEdit
