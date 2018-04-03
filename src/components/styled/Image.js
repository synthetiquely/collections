import glamorous from 'glamorous';

const Image = glamorous.img(
  {
    opacity: '0',
    width: '100%',
    objectFit: 'contain',
    verticalAlign: 'bottom',
    willChange: 'opacity',
    transition: 'opacity 2s',
  },
  ({ loaded, maxWidth, maxHeight }) => {
    let styles = {};
    if (loaded) {
      styles = {
        ...styles,
        opacity: '1',
      };
    }

    if (maxWidth) {
      styles = {
        ...styles,
        maxWidth,
      };
    }

    if (maxHeight) {
      styles = {
        ...styles,
        maxHeight,
      };
    }

    return styles;
  },
);

export default Image;
