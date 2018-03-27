import React from 'react';
import glamorous from 'glamorous';
import Spinner from './Spinner';

const Button = glamorous.button({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '16px',
  padding: '10px',
  color: '#000',
  border: '1px solid #ccc',
  borderLeft: 'none',
  ':hover,:active,:focus': {
    borderLeft: '1px solid',
    borderColor: '#ffdb4d',
  },
  backgroundColor: '#fff',
  cursor: 'pointer',
});

export default ({ loading, ...rest }) => (
  <Button {...rest}>
    {loading && <Spinner size="sm" />}{' '}
    <span style={{ padding: '0 15px' }}>{rest.children}</span>
  </Button>
);
