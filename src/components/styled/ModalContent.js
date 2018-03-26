import glamorous from 'glamorous';
import { css } from 'glamor';

const blowUp = css.keyframes({
  '0%': { transform: 'scale(0)' },
  '100%': { transform: 'scale(1)' },
});

const ModalContent = glamorous.div({
  padding: '30px',
  backgroundColor: '#f6f5f3',
  animation: `${blowUp} .5s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards`,
});

export default ModalContent;
