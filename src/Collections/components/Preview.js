import React from 'react';
import glamorous from 'glamorous';

import Modal from '../../Common/Modal';

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default props => (
  <Modal onClose={props.onClose} onChangeSelected={props.onChangeSelected}>
    <Image src={props.src} alt={props.title} />
  </Modal>
);
