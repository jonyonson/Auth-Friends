import React from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import './App.css';

function App() {
  return (
    <div className="App">
      <PrivateRoute exact path="/" component={FriendsList} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
