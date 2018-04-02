import glamorous from 'glamorous';

const Container = glamorous.div(
  {
    display: 'flex',
    padding: '10px 0',
  },
  ({ centered, fullWidth }) => {
    let styles = {};
    if (centered) {
      styles = {
        ...styles,
        justifyContent: 'center',
        alignItems: 'center',
      };
    } else if (fullWidth) {
      styles = {
        ...styles,
        width: '100%',
      };
    }
    return styles;
  },
);

export default Container;
