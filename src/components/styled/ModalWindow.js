import glamorous from 'glamorous';

const ModalWindow = glamorous.div({
  width: '80vh',
  height: '80vh',
  zIndex: '2',
  padding: '30px',
  display: 'flex',
  margin: 'auto',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f6f5f3',
  '@media only screen and (max-width: 1024px) and (orientation: portrait)': {
    width: '80vw',
    height: '80vw',
  },
  '@media only screen and (max-width: 1024px) and (orientation: landscape)': {
    width: '80vh',
    height: '80vh',
  },
});

export default ModalWindow;
