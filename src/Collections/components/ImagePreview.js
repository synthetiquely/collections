import React from 'react';
import glamorous from 'glamorous';

import Modal from '../../Common/Modal';

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default props => (
  <Modal isOpen={props.isOpen} onClose={props.onClose}>
    <Image src={props.src} alt={props.title} />
  </Modal>
);
