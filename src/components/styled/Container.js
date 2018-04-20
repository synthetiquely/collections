import glamorous from 'glamorous';

const Container = glamorous.div(
  {
    display: 'flex',
    padding: '10px 0',
  },
  ({ centered, fullWidth, mobileInvisible }) => {
    let styles = {};
    if (centered) {
      styles = {
        ...styles,
        justifyContent: 'center',
        alignItems: 'center',
      };
    }
    if (fullWidth) {
      styles = {
        ...styles,
        width: '100%',
      };
    }

    if (mobileInvisible) {
      styles = {
        ...styles,
        '@media (max-width: 500px)': {
          display: 'none',
        },
      };
    }
    return styles;
  },
);

export default Container;
