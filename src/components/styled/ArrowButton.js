import glamorous from 'glamorous';
import { css } from 'glamor';

const unfould = css.keyframes({
  '0%': { transform: 'scaleY(0) scaleX(0)' },
  '100%': { transform: 'scaleY(1) scaleX(1)' },
});

const ArrowButton = glamorous.button(
  {
    zIndex: '3',
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundColor: 'rgba(0,0,0,.4)',
    border: 'none',
    cursor: 'pointer',
    userSelect: 'none',
    ':hover,:active,:focus': {
      fontSize: '25px',
      outline: 'none',
      backgroundColor: 'rgba(0,0,0,.5)',
    },
    animation: `${unfould} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards`,
    '@media (orientation: portrait)': {
      width: '100%',
      height: 'auto',
    },
    '@media (orientation: landscape)': {
      width: 'auto',
      height: '100%',
    },
    '@media only screen and (max-width: 500px)': {
      padding: '10px',
    },
  },
  ({ direction }) => {
    if (direction === 'right') {
      return {
        right: '0',
        borderRadius: '0 3px 3px 0',
        '@media only screen and (max-width: 1750px) and (orientation: portrait)': {
          bottom: '0',
          margin: '0',
        },
      };
    } else if (direction === 'left') {
      return {
        left: '0',
        borderRadius: '3px 0 0 3px',
        '@media only screen and (max-width: 1750px) and (orientation: portrait)': {
          top: '0',
          margin: '0',
        },
      };
    }
    return {};
  },
);

export default ArrowButton;
