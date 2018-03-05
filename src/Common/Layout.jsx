import React from 'react';
import glamorous from 'glamorous';

const Layout = glamorous.div({
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: '80px auto',
  gridTemplateAreas: `
      "header"
      "content"
    `,
});

export default props => <Layout>{props.children}</Layout>;
