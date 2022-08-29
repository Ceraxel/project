import React from 'react';
import ReactDOM from 'react-dom';
import './Error.css';
import { Container } from '../Users/UserItem';

const Backdrop = props => {
  return <div className='backdrop' onClick={props.onConfirm}></div>;
};

const ModalOverlay = props => {
  return (
    <>
      <Container className='modal'>
        <header className='header'>
          <h2>{props.title}</h2>
        </header>
        <div className='content'>{props.message}</div>
        <footer className='actions'>
          <button onClick={props.onConfirm}>Okay</button>
        </footer>
      </Container>
    </>
  );
};

const Error = props => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById('backdrop')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById('overlay')
      )}
    </>
  );
};

export default Error;
