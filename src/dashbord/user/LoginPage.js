import React, { Fragment, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [data, setData] = useState({});
    const [prevdata, setPrevdata] = useState(JSON.parse(localStorage.getItem('userdata')) || []);
    const navigate = useNavigate();
    const [showinput, setShowinput] = useState(false);
    const [otp, setOtp] = useState();

    const genotp = () => {
        const otp = Math.floor(Math.random() * 10000);
        setOtp(otp);
        console.log(otp);
    }

    const getdata = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        console.log(data);
    };

    const login = () => {
        setShowinput(true);
        if (data.otp == otp) {
            localStorage.setItem('mobile', JSON.stringify(data));
            alert('Login Successfull!');
            navigate('/roompage');
        } else {
            alert('Please Enter OTP');
        }
    };

    useEffect(() => {
        genotp();
    }, []);

    return (
        <Fragment>
            <div className='main-container'>
                <div>
                    <h2 className='head'>Enter Your Details</h2>
                    <input type='text' placeholder='Booking Name' name='name' onInput={getdata} />
                    <input type='number' placeholder='Mobile' name='mobile' onInput={getdata} />
                    {
                        showinput &&
                        <Fragment>
                            <input type='number' placeholder='Enter OTP' name='otp' onInput={getdata} />
                        </Fragment>
                    }
                    <button className='btn btn-warning' onClick={login}>LOGIN</button>

                </div>
            </div>

        </Fragment>

    )
}

export default LoginPage
