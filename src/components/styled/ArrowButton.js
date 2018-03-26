import glamorous from 'glamorous';

const ArrowButton = glamorous.div(
  {
    zIndex: '3',
    position: 'absolute',
    width: 'auto',
    marginTop: '-22px',
    padding: '10px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    transition: '0.6s ease',
    cursor: 'pointer',
    ':hover,:active,:focus': {
      fontSize: '25px',
    },
    userSelect: 'none',
  },
  ({ direction }) => {
    if (direction === 'right') {
      return {
        top: '50%',
        right: '0',
        borderRadius: '0 3px 3px 0',
        '@media only screen and (max-width: 500px) and (orientation: portrait)': {
          top: '90%',
          right: '50%',
          left: '50%',
          margin: '0',
          padding: '5px',
          transform: 'rotateZ(90deg)',
        },
      };
    } else if (direction === 'left') {
      return {
        top: '50%',
        left: '0',
        borderRadius: '3px 0 0 3px',
        '@media only screen and (max-width: 500px) and (orientation: portrait)': {
          top: '0',
          left: '50%',
          margin: '0',
          padding: '5px',
          transform: 'rotateZ(90deg)',
        },
      };
    }
    return {};
  },
);

export default ArrowButton;
