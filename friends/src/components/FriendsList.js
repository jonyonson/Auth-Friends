import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axios-with-auth';

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const response = await axiosWithAuth().get(
        'http://localhost:5000/api/friends',
      );
      setFriends(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Friends</h1>
      {isLoading && <h1>Loading...</h1>}
      {friends.map((friend) => (
        <div key={friend.id} className="friend__card">
          <p>Name: {friend.name}</p>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
