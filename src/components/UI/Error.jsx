import React from 'react';
import './Error.css';
import { Container } from '../Users/UserItem';

const Error = props => {
  return (
    <div>
      <div className='backdrop' onClick={props.onConfirm}></div>
      <Container className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>{props.message}</div>
        <footer className='actions'>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Container>
    </div>
  );
};

export default Error;
