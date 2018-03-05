import React from 'react';
import glamorous from 'glamorous';

import Image from './components/Image';
import api from './api';
// import calculateImageOrientation from '../utils/imageUtils';

const Collections = () => {
  // @FIXME: Refactor transofrmation pipeline with rxJS when redux will be available
  const renderItems = () =>
    api
      // .map(item => ({
      //   ...item,
      //   orientation: calculateImageOrientation(item.src),
      // }))
      .map(item => (
        <Image
          src={item.src}
          title={item.title}
          orientation={item.orientation || 'even'}
          key={item.id}
        />
      ));

  return <Views>{renderItems()}</Views>;
};

const Views = glamorous.section({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gridAutoRows: '75px',
  gridAutoFlow: 'dense',
  padding: '10px',
});

export default Collections;
