import React from 'react';
import glamorous from 'glamorous';
import Modal from '../Modal/Modal';
import Swipe from '../Swipe/Swipe';
import * as constants from '../../constants';

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default ({ src, title, ...rest }) => {
  const onSwipe = (direction) => {
    if (direction === 'left' || direction === 'down') {
      rest.onChangeSelected(null, constants.DESTINATION_PREVIOUS);
    } else if (direction === 'right' || direction === 'up') {
      rest.onChangeSelected(null, constants.DESTINATION_NEXT);
    }
  };
  return (
    <Modal {...rest}>
      <Swipe onSwipe={onSwipe}>
        <Image src={src} alt={title} />
      </Swipe>
    </Modal>
  );
};
