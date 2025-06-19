import React, { Fragment, useState } from 'react'
import { useNavigate, useParams } from 'react-router';


function RoompageEdit() {
    const { id } = useParams();
    const [room, setRoom] = useState(JSON.parse(localStorage.getItem('roomdata')));
    const [newroom, setNewroom] = useState(room[id].roomname);
    const [facility, setFacility] = useState(room[id].facilities);
    const [des, setDes] = useState(room[id].decription);
    const [roomprice, setRoomPrice] = useState(room[id].price);


    const navigate = useNavigate();
    console.log(id);

    const updates = () => {
        room[id].roomname = newroom;
        room[id].facilities = facility;
        room[id].decription = des;
        room[id].price = roomprice;
        localStorage.setItem('roomdata', JSON.stringify(room));
        alert('Room data save');
        navigate('/admin/myroompage');
    }

    return (
        <Fragment>
            <div className='main-container'>
                <div>
                    <h2 className='head'>Rooms Details Update</h2>
                    <input type="text" placeholder="Id" disabled defaultValue={id} />
                    <input type="text" placeholder="Room Name" defaultValue={room[id].roomname} onInput={(item) => setNewroom(item.target.value)} />
                    <input type="text" placeholder="Facilities" defaultValue={room[id].facilities} onInput={(item) => setFacility(item.target.value)} />
                    <input type="text" placeholder="Decription" defaultValue={room[id].decription} onInput={(item) => setDes(item.target.value)} />
                    <input type="text" placeholder="Price" defaultValue={room[id].price} onInput={(item) => setRoomPrice(item.target.value)} />
                    <button className='btn btn-warning' onClick={updates}>SAVE</button>

                </div>
            </div>
        </Fragment>

    )
}

export default RoompageEdit
