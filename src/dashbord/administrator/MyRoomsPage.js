import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router';

function MyRoomsPage() {
    const [data, setData] = useState(JSON.parse(localStorage.getItem('roomdata')));
    console.log(data);
    const navigate = useNavigate();

    const editpage = (index) => {
navigate(`/admin/roompageedit/${index}`);

    }

    return (
        <Fragment>
            <div className='table-container'>
                <div>
                    <h2 className='head'>My Rooms</h2>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Room Name</th>
                                <th>Facilities</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((item, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{item.roomname}</td>
                                    <td>{item.facilities}</td>
                                    <td>{item.decription}</td>
                                    <td>{item.price}</td>
                                    <td><img width="70" height="40" src={item.image} alt="" /></td>
                                    <td><button className='btn btn-warning book-button text-bold' onClick={() => editpage(index)}>EDIT</button></td>
                                </tr>

                            ))}


                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>

    )
}

export default MyRoomsPage
