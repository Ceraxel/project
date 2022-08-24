import React, { useState } from 'react';

import './UserForm.css';

const UserForm = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameAddHandler = event => {
    setEnteredUsername(event.target.value);
  };

  const ageAddHandler = event => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    const UserData = {
      Username: enteredUsername,
      Age: enteredAge,
    };
    props.onSaveUserData(UserData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className='container'>
          <div className='form-control'>
            <label>Username</label>
            <input
              type='text'
              value={enteredUsername}
              onChange={usernameAddHandler}
            />
          </div>
          <div className='form-control'>
            <label>Age</label>
            <input type='number' value={enteredAge} onChange={ageAddHandler} />
          </div>
        </div>
        <div className='button-control'>
          <button type='submit'>Add account</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
