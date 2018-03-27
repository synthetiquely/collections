import glamorous from 'glamorous';
import { SIZE_RATIO } from '../../constants';

const ImageContainer = glamorous.div(
  {
    margin: '2.5px',
    cursor: 'pointer',
    willChange: 'width, flexGrow',
    ':hover': {
      boxShadow: '1px 1px 1px #ccc',
    },
  },
  ({ height, width, color }) => {
    const styles = {};
    if (height && width) {
      const size = Math.floor(width * SIZE_RATIO / height);

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
