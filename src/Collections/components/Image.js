import React from 'react';
import glamorous from 'glamorous';

const View = glamorous.div({
  gridColumn: 'span 2',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default props => (
  <View>
    <Image src={props.src} alt={props.title} />
  </View>
);
