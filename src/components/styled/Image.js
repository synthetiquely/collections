import glamorous from 'glamorous';

const Image = glamorous.img(
  {
    opacity: '0',
    width: '100%',
    maxHeight: '90vh',
    verticalAlign: 'bottom',
    willChange: 'opacity',
    transition: 'opacity 1s',
  },
  ({ loaded }) => {
    let styles = {};
    if (loaded) {
      styles = {
        ...styles,
        opacity: '1',
      };
    }

    return styles;
  },
);

export default Image;
