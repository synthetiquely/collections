import glamorous from 'glamorous';
import { css } from 'glamor';

const blowUp = css.keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
});

const ModalContent = glamorous.div(
  {
    willChange: 'backgroundColor',
    transition: '0.5s ease',
    animation: `${blowUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards`,
  },
  ({ color }) => {
    if (color) {
      return {
        backgroundColor: color,
      };
    }
    return {
      backgroundColor: 'transparent',
    };
  },
);

export default ModalContent;
