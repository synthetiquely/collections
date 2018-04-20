import glamorous from 'glamorous';

const CloseButton = glamorous.button({
  zIndex: '4',
  position: 'absolute',
  top: '0',
  right: '8px',
  color: '#aaa',
  fontSize: '35px',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  userSelect: 'none',
});

export default CloseButton;
