import React from 'react';
import styled from 'styled-components';

const List = styled.div`
  display: flex;
  padding: 5px 0;
  // box-sizing: border-box;
  background-color: white;
  margin: 10px 0;
  width: 100%;
  border-radius: 8px;
  font-size: larger;
  font-weight: bold;
  color: black;
  font-family: IosevkaTerm Nerd Font;
  text-align: center;
  justify-content: center;
`;

const UserList = props => {
  return (
    <List>
      <div className='item-list'>
        <h2>Username: {props.Username}</h2>
        <h2>Age: {props.Age}</h2>
      </div>
    </List>
  );
};

export default UserList;
