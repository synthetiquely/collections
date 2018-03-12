import glamorous from 'glamorous';

const Link = glamorous.a({
  color: '#a9a9a9',
  textDecoration: 'none',
  ':hover,:active,:focus': {
    color: '#ffdb4d',
  },
});

export default Link;
