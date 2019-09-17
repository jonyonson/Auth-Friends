import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axios-with-auth';
import { Redirect } from 'react-router-dom';

function Login(props) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
    username: 'Lambda School',
    password: 'i<3Lambd4',
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const login = (event) => {
    event.preventDefault();

    axiosWithAuth()
      .post('http://localhost:5000/api/login', user)
      .then((res) => {
        localStorage.setItem('token', res.data.payload);
        props.history.push('/');
      })
      .catch((err) => setError(err.message));
  };

  return window.localStorage.getItem('token') ? (
    <Redirect to="/" />
  ) : (
    <div className="login">
      <form onSubmit={login}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={user.username}
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          id="password"
          name="password"
          value={user.password}
          onChange={(event) => handleChange(event)}
        />
        <button type="submit">Login</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Login;
