import React from 'react';
import glamorous from 'glamorous';
import View from '../View/View';

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

const Gallery = glamorous.section(
  {
    display: 'flex',
    flexWrap: 'wrap',
    '@media only screen and (min-width: 768px)': {
      '&::after': {
        content: "''",
        flexGrow: '999999999',
      },
    },
  },
  ({ isOpen }) => ({
    overflowY: isOpen ? 'hidden' : 'auto',
  }),
);

export default Views;
