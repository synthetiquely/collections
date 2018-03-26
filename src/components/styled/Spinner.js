import React from 'react';
import glamorous from 'glamorous';
import { css } from 'glamor';

const animationStyles = () => {
  const spin = css.keyframes({
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  });
  return {
    display: 'block',
    width: '60px',
    height: '60px',
    margin: '5px',
    border: '5px solid #ffdb4d',
    borderTopColor: 'transparent',
    borderRadius: '50%',
    animation: `${spin} 1s linear infinite`,
  };
};

const Overlay = glamorous.div({
  position: 'fixed',
  top: '0',
  right: '0',
  bottom: '0',
  left: '0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#fff',
});

const Spinner = glamorous.span(animationStyles);

export default ({ overlayed, ...rest }) => {
  if (overlayed) {
    return (
      <Overlay>
        <Spinner {...rest} />
      </Overlay>
    );
  }
  return <Spinner {...rest} />;
};
