import React from 'react';
import glamorous from 'glamorous';
import Link from '../styled/Link';

const Footer = glamorous.footer({
  gridArea: 'footer',
  gridColumn: '1 / -1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderTop: '1px solid rgba(0,0,0,.1)',
});

const Paragraph = glamorous.p({
  textAlign: 'center',
});

export default () => (
  <Footer>
    <Paragraph>
      The source code is licensed under MIT. See{' '}
      <Link href="https://github.com/synthetiquely/collections">
        public repository
      </Link>{' '}
      for more details.
    </Paragraph>
  </Footer>
);