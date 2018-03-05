import React from 'react';
import glamorous from 'glamorous';

import Image from './components/Image';
import api from './api';

const Collections = () => {
  const renderItems = () =>
    api.map(item => <Image src={item.src} title={item.title} key={item.id} />);

  return <Views>{renderItems()}</Views>;
};

const Views = glamorous.section({
  display: 'grid',
  gridGap: '5px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gridAutoRows: '75px',
  gridAutoFlow: 'dense',
});

export default Collections;
