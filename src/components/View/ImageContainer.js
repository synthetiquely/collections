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
  ({ height, width }) => {
    if (height && width) {
      const size = Math.floor(width * SIZE_RATIO / height);

      return {
        flexGrow: `${size}`,
        width: `${size}px`,
      };
    }
    return {};
  },
);

export default ImageContainer;
