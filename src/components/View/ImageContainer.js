import glamorous from 'glamorous';

const ImageContainer = glamorous.div(
  {
    margin: '2.5px',
    cursor: 'pointer',
    willChange: 'width, flexGrow',
    ':hover': {
      boxShadow: '1px 1px 1px #ccc',
    },
  },
  ({ size, color }) => {
    const styles = {};
    if (size) {
      styles.flexGrow = size;
      styles.width = `${size}px`;
    }

    if (color) {
      styles.backgroundColor = color;
    }
    return styles;
  },
);

export default ImageContainer;
