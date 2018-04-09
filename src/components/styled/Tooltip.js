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
