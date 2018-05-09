import glamorous from 'glamorous';

const Link = glamorous.a(
  {
    color: '#a9a9a9',
    textDecoration: 'none',
    ':hover,:active,:focus': {
      color: '#ffdb4d',
    },
  },
  ({ inverted }) => {
    let styles = {};

    if (inverted) {
      styles = {
        ...styles,
        backgroundColor: '#ffd633',
        textTransform: 'uppercase',
        fontWeight: '700',
        padding: '0.7em 2em',
        color: '#fff',
        border: '2px solid #ffd633',
        transition: 'all 0.3s cubic-bezier(0,0,0.58,1)',
        cursor: 'pointer',
        textDecoration: 'none',
        ':hover,:active,:focus': {
          backgroundColor: '#fff',
          color: '#2b2d35',
          borderColor: '#fff',
        },
      };
    }

    return styles;
  },
);

export default Link;
