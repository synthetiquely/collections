import React from 'react';
import { observer } from 'mobx-react';
import View from '../View/View';
import Gallery from './Gallery';

const Views = observer(({ images, isOpen, onClick }) => {
  if (!images) {
    return null;
  }

  const renderItems = () =>
    images.map((item, index) => (
      <View image={item} key={item.id} onClick={onClick(index)} />
    ));

  return <Gallery isOpen={isOpen}>{renderItems()}</Gallery>;
});

export default Views;
