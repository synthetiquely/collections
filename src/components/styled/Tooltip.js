import glamorous from 'glamorous';

const Tooltip = glamorous.div(
  {
    position: 'absolute',
    bottom: '75px',
    left: '-75px',
    width: '300px',
    height: '60px',
    opacity: '0',
    willChange: 'opacity, left',
    backgroundColor: 'rgba(0,0,0,0.7)',
    transition: 'all 0.3s ease-in-out',
    '@media only screen and (max-width: 1024px)': {
      opacity: '1',
      bottom: '10px',
      left: '0px',
      width: 'auto',
      height: '60px',
    },
  },
  ({ showTooltip }) => {
    let styles = {};
    if (showTooltip) {
      styles = {
        ...styles,
        opacity: '1',
        left: '45px',
      };
    }
    return styles;
  },
);

export default Tooltip;
