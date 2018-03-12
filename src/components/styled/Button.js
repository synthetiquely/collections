import glamorous from 'glamorous';

const Button = glamorous.button({
  fontSize: '16px',
  padding: '10px',
  color: '#000',
  border: '1px solid #ccc',
  borderLeft: 'none',
  ':hover,:active,:focus': {
    borderLeft: '1px solid',
    borderColor: '#ffdb4d',
  },
  backgroundColor: '#fff',
  cursor: 'pointer',
});

export default Button;
