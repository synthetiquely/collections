import React from 'react';
import { DESTINATION_NEXT, DESTINATION_PREVIOUS } from '../../constants';
import Backdrop from '../styled/Backdrop';
import ModalWindow from '../styled/ModalWindow';
import ModalContent from '../styled/ModalContent';
import ArrowButton from '../styled/ArrowButton';
import CloseButton from '../styled/CloseButton';
import Icon from '../styled/Icon';

const Modal = props => (
  <Backdrop>
    <ModalWindow id="preview-modal">
      <CloseButton id="preview-close-button" onClick={props.onClose}>
        <Icon size="lg">&times;</Icon>
      </CloseButton>
      <ArrowButton
        id="preview-right-arrow"
        direction="right"
        onClick={() => props.onChangeSelected(DESTINATION_NEXT)}
      >
        <Icon rotatable size="md">
          &#10095;
        </Icon>
      </ArrowButton>
      <ArrowButton
        id="preview-left-arrow"
        direction="left"
        onClick={() => props.onChangeSelected(DESTINATION_PREVIOUS)}
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
