import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { loginContext } from './contexts/loginContext';

function Userinfo() {
  const [currentUser, setCurrentUser] = useState(null);
  const { userId } = useContext(loginContext); // Assuming userId is stored in login context

  useEffect(() => {
    if (userId) {
      axios.get(`http://localhost:3500/user-api/get-user/${userId}`)
        .then(response => {
          setCurrentUser(response.data.payload); // Assuming the response data contains user details
        })
        .catch(error => {
          console.error('Error fetching user data:', error);
        });
    }
  }, [userId]);

  return (
    <div className="container">
      {currentUser && (
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{currentUser.username}</h5>
                <p className="card-text"><strong>Date of Birth:</strong> {currentUser.DateofBirth}</p>
                <p className="card-text"><strong>Gender:</strong> {currentUser.gender}</p>
                <p className="card-text"><strong>Email:</strong> {currentUser.Email}</p>
                <p className="card-text"><strong>Phone Number:</strong> {currentUser.Phonenumber}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Userinfo;
