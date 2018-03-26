import React from 'react';
import { DESTINATION_NEXT, DESTINATION_PREVIOUS } from '../../constants';
import Backdrop from '../styled/Backdrop';
import ModalWindow from '../styled/ModalWindow';
import ArrowButton from '../styled/ArrowButton';
import CloseButton from '../styled/CloseButton';

const Modal = props => (
  <Backdrop onClick={props.onClose}>
    <ModalWindow>
      <CloseButton onClick={props.onClose}>&times;</CloseButton>
      <ArrowButton
        direction="right"
        onClick={e => props.onChangeSelected(e, DESTINATION_NEXT)}
      >
        &#10095;
      </ArrowButton>
      <ArrowButton
        direction="left"
        onClick={e => props.onChangeSelected(e, DESTINATION_PREVIOUS)}
      >
        &#10094;
      </ArrowButton>
      {props.children}
    </ModalWindow>
  </Backdrop>
);

export default Modal;
