import React from 'react';
import { DESTINATION_NEXT, DESTINATION_PREVIOUS } from '../../constants';
import Backdrop from '../styled/Backdrop';
import ModalWindow from '../styled/ModalWindow';
import ModalContent from '../styled/ModalContent';
import ArrowButton from '../styled/ArrowButton';
import CloseButton from '../styled/CloseButton';
import Icon from '../styled/Icon';

const Modal = props => (
  <Backdrop onClick={props.onClose}>
    <ModalWindow>
      <CloseButton onClick={props.onClose}>
        <Icon size="lg">&times;</Icon>
      </CloseButton>
      <ArrowButton
        direction="right"
        onClick={e => props.onChangeSelected(e, DESTINATION_NEXT)}
      >
        <Icon rotatable size="md">
          &#10095;
        </Icon>
      </ArrowButton>
      <ArrowButton
        direction="left"
        onClick={e => props.onChangeSelected(e, DESTINATION_PREVIOUS)}
      >
        <Icon rotatable size="md">
          &#10094;
        </Icon>
      </ArrowButton>
      <ModalContent
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        color={props.bgColor}
      >
        {props.children}
      </ModalContent>
    </ModalWindow>
  </Backdrop>
);

export default Modal;
