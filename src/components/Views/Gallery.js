import glamorous from 'glamorous';

const Gallery = glamorous.section(
  {
    display: 'flex',
    flexWrap: 'wrap',
    '@media only screen and (min-width: 768px)': {
      '&::after': {
        content: "''",
        flexGrow: '999999999',
      },
    },
  },
  ({ isOpen }) => ({
    overflowY: isOpen ? 'hidden' : 'auto',
  }),
);

export default Gallery;
