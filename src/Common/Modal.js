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
  padding: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f6f5f3',
  transform: 'translate(-50%, -50%)',
});

const CloseButton = glamorous.span({
  position: 'absolute',
  top: '-8px',
  right: '3px',
  color: '#aaa',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
});

const Modal = (props) => {
  if (props.isOpen) {
    return (
      <React.Fragment>
        <Window>
          <div>
            <CloseButton onClick={props.onClose}>&times;</CloseButton>
          </div>
          {props.children}
        </Window>
        <Backdrop onClick={props.onClose} />
      </React.Fragment>
    );
  }
  return null;
};

export default Modal;
