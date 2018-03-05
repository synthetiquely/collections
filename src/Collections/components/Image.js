import React from 'react';
import glamorous from 'glamorous';

const View = glamorous.div(
  {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    ':hover': {
      boxShadow: '1px 1px 1px 1px #ccc',
    },
  },
  ({ orientation }) => {
    if (orientation === 'landscape') {
      return {
        gridColumn: 'span 2',
      };
    } else if (orientation === 'portrait') {
      return {
        gridRow: 'span 2',
      };
    }
    return {
      gridColumn: 'span 2',
      gridRow: 'span 2',
    };
  },
);

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
});

export default props => (
  <View orientation={props.orientation} onClick={props.onClick}>
    <Image src={props.src} alt={props.title} />
  </View>
);
