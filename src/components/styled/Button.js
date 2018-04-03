import React from 'react';
import glamorous from 'glamorous';
import Spinner from './Spinner';

const Button = glamorous.button(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '16px',
    padding: '10px',
    color: '#000',
    border: '1px solid #ccc',
    outline: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    ':hover,:active,:focus': {
      borderLeft: '1px solid',
      borderColor: '#ffdb4d',
    },
  },
  ({ size, inverted, bordered }) => {
    let styles = {};
    if (size === 'fullWidth') {
      styles = {
        ...styles,
        width: '100%',
      };
      if (inverted) {
        styles = {
          ...styles,
          ':hover,:active,:focus': {
            backgroundColor: '#ffdb4d',
            color: '#fff',
            borderColor: '#ffd35f',
          },
        };
      }
      if (bordered) {
        styles = {
          ...styles,
          borderRadius: '10px',
        };
      }
    }
    return styles;
  },
);

export default ({ loading, ...rest }) => (
  <Button {...rest}>
    {loading && <Spinner size="sm" />}{' '}
    <span style={{ padding: '0 15px' }}>{rest.children}</span>
  </Button>
);
