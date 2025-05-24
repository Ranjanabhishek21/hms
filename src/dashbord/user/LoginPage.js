import React, { Fragment, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [data, setData] = useState({});
    const [prevdata, setPrevdata] = useState(JSON.parse(localStorage.getItem('userdata')) || []);
    const navigate = useNavigate();

    const getdata = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
        console.log(data);
    };

    const login = () => {
        const result = prevdata.filter((item) => item.email == data.email);
        console.log(result);
        if (result.length > 0) {
            if (result[0].password == data.password) {
                alert('Login Successful!');
                navigate('/home');
            } else {
                alert('Invalid Email/Password');
            }
        } else {
            alert('You are not Registered, Please Register');
            navigate('/register');
        }


    };
    const signup = () => {
        navigate('/register');
    }
    return (
        <Fragment>
            <div className='main-container'>
                <div>
                    <h2 className='head'>Sign In</h2>
                    <input type='email' placeholder='Email*' name='email' onInput={getdata} />
                    <input type='password' placeholder='Password*' name='password' onInput={getdata} />
                    <p class="para">Forgot password? | <span onClick={signup}>Create an account</span></p>
                    <button className='btn btn-warning' onClick={login}>LOGIN</button>

                </div>
            </div>

        </Fragment>

    )
}

export default LoginPage
