import glamorous from 'glamorous';

const ModalWindow = glamorous.div({
  width: '80vh',
  height: '80vh',
  zIndex: '2',
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  '@media only screen and (max-width: 1024px) and (orientation: portrait)': {
    width: '90vw',
    height: '90vw',
  },
  '@media only screen and (max-width: 1024px) and (orientation: landscape)': {
    width: '90vh',
    height: '90vh',
  },
  '@media only screen and (max-width: 1024px)': {
    padding: '10px',
  },
});

export default ModalWindow;
