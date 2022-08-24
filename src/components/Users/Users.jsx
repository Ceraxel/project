import React from 'react';

import './Users.css';
import Card from '../UI/Card';
import UserForm from './UserForm';

const Users = () => {
  const saveDataHandler = data => {
    const enteredData = {
      ...data,
    };
    console.log(enteredData);
  };

  return (
    <Card className='users'>
      <UserForm onSaveUserData={saveDataHandler} />
    </Card>
  );
};

export default Users;
