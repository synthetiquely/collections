import React from 'react';
import glamorous from 'glamorous';

const Layout = glamorous.div({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '80px 1fr 80px',
  gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `,
});

export default props => <Layout>{props.children}</Layout>;
