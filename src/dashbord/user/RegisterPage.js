import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function RegisterPage() {
    const [userdata, setUserdata] = useState({});
    const [prevdata, setPrevdata] = useState(JSON.parse(localStorage.getItem('userdata')) || []);
    const navigate = useNavigate();

    const getuserdata = (event) => {
        setUserdata({
            ...userdata,
            [event.target.name]: event.target.value

        })
        console.log(userdata);
    };

    const register = () => {
        const user = prevdata.filter((item) => item.email == userdata.email);
        console.log(user);
        if (user.length > 0) {
            alert('Already Registered Please Login!');
            navigate('/login');
        } else {
            if (userdata) {
                if (userdata.password == userdata.confirmpass) {
                    prevdata.push(userdata)
                    console.log(prevdata);
                    localStorage.setItem('userdata', JSON.stringify(prevdata));
                    alert('Registration Successfull!');
                    navigate('/login');
                } else {
                    alert('Password Mistmatch!');
                }
            } else {
                alert('All fields are required');
            }

        }

    };

    const signup = () => {
        navigate('/login');
    }

    return (
        <Fragment>
            <div className='main-container'>
                <div>
                    <h2 className='head'>Sign Up</h2>
                    <input type='text' placeholder='Name' name='name' onInput={getuserdata} />
                    <input type='email' placeholder='Email*' name='email' onInput={getuserdata} />
                    <input type='number' placeholder='Contact Number' name='mobile' onInput={getuserdata} />
                    <input type='password' placeholder='Password*' name='password' onInput={getuserdata} />
                    <input type='text' placeholder='Confirm Passwod' name='confirmpass' onInput={getuserdata} />
                    <button className='btn btn-warning' onClick={register}>REGISTER</button>
                    <p className="para1" onClick={signup}>Already have an account</p>
                </div>
            </div>
        </Fragment>
    )
}

export default RegisterPage
