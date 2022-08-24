import React, { useState } from 'react';

import './Users.css';
import Card from '../UI/Card';
import UserForm from './UserForm';
import UserList from './UserList';

const Users = () => {
  const [userData, setUserData] = useState([]);
  const saveDataHandler = data => {
    setUserData(prevUserData => {
      return [data, ...prevUserData];
    });
  };

  return (
    <Card className='users'>
      <UserForm onSaveUserData={saveDataHandler} />
      <UserList usersData={userData} />
    </Card>
  );
};

export default Users;
