import React from 'react';
import { Route } from 'react-router-dom';
import Login from './Login';
import Header from './Header';
import PrivateRoute from './PrivateRoute';
import FriendsList from './FriendsList';

function App() {
  return (
    <div className="App">
      <Header />
      <PrivateRoute exact path="/" component={FriendsList} />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;
