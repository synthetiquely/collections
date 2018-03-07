import React from 'react';
import glamorous from 'glamorous';

const Header = glamorous.header({
  gridArea: 'header',
  gridColumn: '1 / -1',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderBottom: '1px solid rgba(0,0,0,.1)',
});

export default props => <Header>{props.children}</Header>;
