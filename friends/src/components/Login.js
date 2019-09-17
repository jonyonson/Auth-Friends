import React, { useState } from 'react';

function Login() {
  const [user, setUser] = useState({ username: '', password: '' });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(event) => handleChange(event)}
        />
        <label htmlFor="">Passowrd</label>
        <input
          type="text"
          id="password"
          name="password"
          onChange={(event) => handleChange(event)}
        />
      </form>
    </div>
  );
}

export default Login;
