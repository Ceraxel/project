import React, { useState } from 'react';
import Users from './components/Users/Users';
import { UserItem } from './components/Users/UserItem';

function App() {
  const [userData, setUserData] = useState([]);
  const dataHandler = data => {
    setUserData(prevUserData => {
      return [data, ...prevUserData];
    });
  };

  return (
    <div>
      <Users data={dataHandler} />
      <UserItem data={userData} />
    </div>
  );
}

export default App;
