import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axios-with-auth';
import AddFriend from './AddFriend';

function FriendsList() {
  const [friends, setFriends] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = async () => {
    try {
      const res = await axiosWithAuth().get(
        'http://localhost:5000/api/friends',
      );
      const data = res.data.reverse();
      setFriends(data);
      setIsLoading(false);
      setIsAdding(false);
    } catch (error) {
      console.log(error);
    }
  };

  const addFriend = async (newFriend) => {
    setIsAdding(true);

    try {
      await axiosWithAuth().post(
        'http://localhost:5000/api/friends',
        newFriend,
      );
      fetchFriends();
    } catch (error) {
      console.log(error);
    }
  };

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <div>
      <AddFriend addFriend={addFriend} fetchFriends={fetchFriends} />
      {isAdding && <h1>Adding Friend...</h1>}
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
