import React from 'react';
import UserList from './UserList';
import styled from 'styled-components';

export const Container = styled.div`
  padding: 10px 15px;
  background-color: rgb(31, 31, 31);
  margin: 5px auto;
  width: 50rem;
  border-radius: 12px;
  font-size: larger;
  font-weight: bold;
  color: white;
  font-family: IosevkaTerm Nerd Font;
  text-align: center;
`;

export const UserItem = props => {
  if (props.data.length === 0) {
    return <Container>No users found</Container>;
  }
  return (
    <Container>
      {props.data.map(data => (
        <UserList key={data.key} Username={data.Username} Age={data.Age} />
      ))}
    </Container>
  );
};
