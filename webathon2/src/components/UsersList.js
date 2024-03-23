import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3500/user-api/get-user')
      .then(response => {
        setUsers(response.data.payload); // Assuming the response data is an array of user objects
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const renderUserCards = () => {
    return users.map((userObj) => (
      <div key={userObj._id} className="col mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{userObj.username}</h5>
            <p className="card-text"><strong>Date of Birth:</strong> {userObj.DateofBirth}</p>
            <p className="card-text"><strong>Gender:</strong> {userObj.gender}</p>
            <p className="card-text"><strong>Email:</strong> {userObj.Email}</p>
            <p className="card-text"><strong>Phone Number:</strong> {userObj.Phonenumber}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {renderUserCards()}
      </div>
    </div>
  );
}

export default UsersList;
