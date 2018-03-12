import React from 'react';
import glamorous from 'glamorous';

import Modal from '../Modal/Modal';

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default ({ src, title, ...rest }) => (
  <Modal {...rest}>
    <Image src={src} alt={title} />
  </Modal>
);
