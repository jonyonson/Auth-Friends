import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axios-with-auth';

function Login(props) {
  const [user, setUser] = useState({ username: '', password: '' });
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  /*
   * username: 'Lambda School'
   * password: 'i<3Lambd4'
   */
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

  return (
    <div>
      <h1>Login</h1>
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
