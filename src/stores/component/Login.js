import React, { useContext, useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { loginStatus } from '../../App';
import axios from 'axios';

const Login = () => {
  const [details, Setdetails] = useState({});
  const [token, setToken] = useContext(loginStatus);
  const [error, setError] = useState(""); // <-- Error message state
  const navigate = useNavigate();

  const changedata = (e) => {
    Setdetails({ ...details, [e.target.name]: e.target.value });
  };

  const Submithandler = (e) => {
    e.preventDefault();

    axios
      .post(`https://gcapp-server.onrender.com/Ulogin`, details)
      .then((res) => {
        localStorage.setItem('usertoken', res.data.token);
        setToken(res.data.token);
      })
      .catch((err) => {
        const msg = err.response?.data?.message || "Invalid credentials";
        setError(msg);

        // Optional: Hide error after 3 seconds
        setTimeout(() => setError(""), 3000);
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/cart");
    }
  }, [token, navigate]);

  return (
    <div className='container p-5'>
      <div className='col-lg-6 shadow p-5 mx-auto'>
        <h3 className='mb-4'>Login</h3>

        {error && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <form onSubmit={Submithandler}>
          <input
            type='email'
            name='email'
            onChange={changedata}
            placeholder='Email Address'
            className='form-control mb-3'
            required
          />
          <input
            type='password'
            name='password'
            onChange={changedata}
            placeholder='New Password'
            className='form-control mb-3'
            required
          />
          <input
            type='submit'
            className='form-control mb-3 btn btn-success'
            value="Submit"
          />
          <p>
            Don't have an account? <NavLink to="/Signup">Register here</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;