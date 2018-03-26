import glamorous from 'glamorous';

const CloseButton = glamorous.button({
  zIndex: '4',
  position: 'absolute',
  top: '0',
  right: '10px',
  color: '#aaa',
  fontSize: '28px',
  fontWeight: 'bold',
  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  userSelect: 'none',
});

export default CloseButton;
