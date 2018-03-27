import glamorous from 'glamorous';

const Layout = glamorous.div({
  height: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr',
  gridTemplateRows: '80px 1fr auto',
  gridTemplateAreas: `
      "header"
      "content"
      "footer"
    `,
});

export default Layout;
