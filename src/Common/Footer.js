import React from 'react';
import glamorous from 'glamorous';

const Footer = glamorous.footer({
  gridArea: 'footer',
  gridColumn: '1 / -1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderTop: '1px solid rgba(0,0,0,.1)',
});

export default props => <Footer>{props.children}</Footer>;
