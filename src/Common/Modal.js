import React from 'react';
import glamorous from 'glamorous';

const Backdrop = glamorous.div({
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '0px',
  left: '0px',
  zIndex: '9998',
  backgroundColor: 'rgba(0,0,0,0.6)',
});

const Window = glamorous.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  zIndex: '9999',
  padding: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f6f5f3',
  transform: 'translate(-50%, -50%)',
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

const Next = glamorous.span({
  position: 'absolute',
  top: '50%',
  right: '0',
  width: 'auto',
  marginTop: '-22px',
  padding: '10px',
  color: '#000',
  fontWeight: 'bold',
  fontSize: '18px',
  transition: '0.6s ease',
  borderRadius: '0 3px 3px 0',
  cursor: 'pointer',
  ':hover,:active,:focus': {
    backgroundColor: '#ffdb4d',
  },
});

const Prev = glamorous.span({
  position: 'absolute',
  top: '50%',
  width: 'auto',
  left: '0',
  marginTop: '-22px',
  padding: '10px',
  color: '#000',
  fontWeight: 'bold',
  fontSize: '18px',
  transition: '0.6s ease',
  borderRadius: '3px 0 0 3px',

  cursor: 'pointer',
  ':hover,:active,:focus': {
    backgroundColor: '#ffdb4d',
  },
});

const Modal = (props) => {
  if (props.isOpen) {
    return (
      <React.Fragment>
        <Window>
          <CloseButton onClick={props.onClose}>&times;</CloseButton>
          <Next onClick={props.onNext}>&#10095;</Next>
          <Prev onClick={props.onPrevious}>&#10094;</Prev>
          {props.children}
        </Window>
        <Backdrop onClick={props.onClose} />
      </React.Fragment>
    );
  }
  return null;
};

export default Modal;
