import React, { useState, useRef } from 'react';
import Error from '../UI/Error';

import './UserForm.css';

const UserForm = props => {
  const [error, setError] = useState(false);

  const nameInputRef = useRef();
  const ageInputRef = useRef();
  console.log(nameInputRef);

  const submitHandler = event => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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
    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
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
            <input type='text' ref={nameInputRef} />
          </div>
          <div className='form-control'>
            <label>Age</label>
            <input type='number' ref={ageInputRef} />
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
