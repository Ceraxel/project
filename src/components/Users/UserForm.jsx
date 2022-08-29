import React, { useState } from 'react';
import Error from '../UI/Error';

import './UserForm.css';

const UserForm = props => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(false);

  const usernameAddHandler = event => {
    setEnteredUsername(event.target.value);
  };
  const ageAddHandler = event => {
    setEnteredAge(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0) {
      setError({
        title: 'Invalid Input',
        message: 'Empty username value',
      });
      return;
    }
    if (+enteredAge < 0) {
      setError({
        title: 'Invalid Input',
        message: 'Age cannot be a negative value',
      });
      return;
    }

    const UserData = {
      key: Math.random(),
      Username: enteredUsername,
      Age: enteredAge,
    };
    props.onSaveUserData(UserData);
    setEnteredUsername('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <Error
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
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
            <input
              type='number'
              value={enteredAge}
              onChange={ageAddHandler}
              min='5'
            />
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
