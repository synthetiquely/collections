import React from 'react';
import View from '../View/View';
import Gallery from './Gallery';

const Views = ({ images, isOpen, onClick }) => {
  if (!images) {
    return null;
  }

  const renderItems = () =>
    images.map((item, index) => (
      <View
        src={item.src}
        title={item.title}
        key={item.id}
        onClick={onClick(index)}
      />
    ));

  return <Gallery isOpen={isOpen}>{renderItems()}</Gallery>;
};

export default Views;
