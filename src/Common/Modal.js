import React from 'react';
import glamorous from 'glamorous';

const Backdrop = glamorous.div({
  position: 'fixed',
  display: 'flex',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  zIndex: '1',
  backgroundColor: 'rgba(0,0,0,0.6)',
});

const Window = glamorous.div({
  width: '80vh',
  height: '80vh',
  zIndex: '2',
  padding: '30px',
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f6f5f3',
  '@media only screen and (max-width: 1024px) and (orientation: portrait)': {
    width: '80vw',
    height: '80vw',
  },
  '@media only screen and (max-width: 1024px) and (orientation: landscape)': {
    width: '80vh',
    height: '80vh',
  },
});

const CloseButton = glamorous.span({
  position: 'absolute',
  top: '-5px',
  right: '5px',
  color: '#aaa',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
});

const Next = glamorous.div({
  zIndex: '3',
  position: 'absolute',
  top: '50%',
  right: '0',
  width: 'auto',
  marginTop: '-22px',
  padding: '10px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '20px',
  transition: '0.6s ease',
  borderRadius: '0 3px 3px 0',
  cursor: 'pointer',
  ':hover,:active,:focus': {
    fontSize: '25px',
  },
  '@media only screen and (max-width: 500px) and (orientation: portrait)': {
    top: '90%',
    right: '50%',
    left: '50%',
    margin: '0',
    padding: '5px',
    transform: 'rotateZ(90deg)',
  },
});

const Prev = glamorous.div({
  zIndex: '3',
  position: 'absolute',
  top: '50%',
  width: 'auto',
  left: '0',
  marginTop: '-22px',
  padding: '10px',
  color: '#fff',
  fontWeight: 'bold',
  fontSize: '20px',
  transition: '0.6s ease',
  borderRadius: '3px 0 0 3px',
  cursor: 'pointer',
  ':hover,:active,:focus': {
    fontSize: '25px',
  },
  '@media only screen and (max-width: 500px) and (orientation: portrait)': {
    top: '0',
    left: '50%',
    margin: '0',
    padding: '5px',
    transform: 'rotateZ(90deg)',
  },
});

const Modal = (props) => {
  if (props.isOpen) {
    return (
      <React.Fragment>
        <Backdrop onClick={props.onClose}>
          <Window>
            <CloseButton onClick={props.onClose}>&times;</CloseButton>
            <Next onClick={props.onNext}>&#10095;</Next>
            <Prev onClick={props.onPrevious}>&#10094;</Prev>
            {props.children}
          </Window>
        </Backdrop>
      </React.Fragment>
    );
  }
  return null;
};

export default Modal;
