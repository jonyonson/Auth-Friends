import React, { useState } from 'react';

function AddFriend(props) {
  const [newFriend, setNewFriend] = useState({ name: '', age: '', email: '' });

  const handleChange = (event) => {
    setNewFriend({ ...newFriend, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addFriend(newFriend);
    setNewFriend({ name: '', age: '', email: '' });
  };

  return (
    <div className="add-friend">
      <form onSubmit={handleSubmit}>
        <div className="add-friend__top-row">
          <input
            type="text"
            placeholder="Name"
            className="add-friend__name"
            name="name"
            value={newFriend.name}
            onChange={handleChange}
          />
          <input
            placeholder="Age"
            className="add-friend__age"
            name="age"
            value={newFriend.age}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          name="email"
          value={newFriend.email}
          onChange={handleChange}
        />
        <button type="submit">Add Friend</button>
      </form>
    </div>
  );
}

export default AddFriend;
