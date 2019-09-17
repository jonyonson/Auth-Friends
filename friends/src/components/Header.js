import React from 'react';
import { Link, withRouter } from 'react-router-dom';

function Header(props) {
  const logout = () => {
    localStorage.setItem('token', '');
    props.history.push('/');
  };

  return (
    <header className="header">
      <Link to="/" className="title">
        Friends
      </Link>
      {localStorage.getItem('token') && (
        <div onClick={logout} className="logout">
          Logout
        </div>
      )}
    </header>
  );
}

export default withRouter(Header);
