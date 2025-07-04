import React, { useContext, useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom';
import { loginStatus } from '../../App'
import axios from 'axios';

const Signin = () => {
    const [details, Setdetails] = useState({});
    const navigate = useNavigate();
    const [token, setToken] = useContext(loginStatus);

    const changedata = (e) => {
        Setdetails({...details, [e.target.name]: e.target.value})
    };

    const Submithandler = (e) => {
        e.preventDefault();
        console.log(details);
        axios.post(`https://gcapp-server.onrender.com/adminlogin`,details)
        .then((res)=> {
            console.log(res.data);
            setToken(res.data.token);
        })
        .catch((err) => console.log(err))
    }
    
  useEffect(() => {
    if (token) {
      navigate("/dashboard");
    }
  }, [token, navigate]);

  return (
    <div className='container p-5'>
        <div className='col-lg-6 shadow p-5 mx-auto'>
            <h3>Admin Dashboard</h3>
            <form onSubmit={Submithandler} className=''>
                <input type='email' name='email' onChange={changedata} placeholder='Email Address' className='form-control mb-3'></input>
                <input type='password' name='password' onChange={changedata} placeholder='New Password' className='form-control mb-3'></input>
                <input type='submit' className='form-control mb-3 btn btn-success'></input>
            </form>
        </div>
    </div>
  )
}

export default Signin