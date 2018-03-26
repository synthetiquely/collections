import glamorous from 'glamorous';

const CloseButton = glamorous.span({
  position: 'absolute',
  top: '-5px',
  right: '5px',
  color: '#aaa',
  fontSize: '28px',
  fontWeight: 'bold',
  cursor: 'pointer',
  userSelect: 'none',
});

export default CloseButton;
