import React from 'react';

import './Users.css';
import Card from '../UI/Card';
import UserForm from './UserForm';
import './UserList.css';

const Users = props => {
  const saveDataHandler = data => {
    props.data(data);
  };
  return (
    <>
      <Card className='users'>
        <UserForm onSaveUserData={saveDataHandler} />
      </Card>
    </>
  );
};

export default Users;
