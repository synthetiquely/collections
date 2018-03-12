import glamorous from 'glamorous';

const Input = glamorous.input({
  width: '100%',
  padding: '10px',
  fontSize: '16px',
  color: '#000',
  border: '1px solid #ccc',
  ':hover,:active,:focus': {
    borderColor: '#ffdb4d',
  },
  outlineColor: '#ffdb4d',
});

export default Input;
