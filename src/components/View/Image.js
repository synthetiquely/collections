import glamorous from 'glamorous';

const Image = glamorous.img(
  {
    opacity: '0',
    width: '100%',
    verticalAlign: 'bottom',
    willChange: 'opacity',
    transition: 'opacity 2s',
  },
  ({ loaded }) => {
    if (loaded) {
      return {
        opacity: '1',
      };
    }
    return {};
  },
);

export default Image;
