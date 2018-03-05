import React, { Component } from 'react';
import glamorous from 'glamorous';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      loading: false,
      error: null,
    };
  }

  render() {
    return (
      <Form>
        <Input
          type="text"
          id="search"
          name="search"
          placeholder="Поиск по коллекциям"
        />
        <Button type="submit">Найти</Button>
      </Form>
    );
  }
}

const Form = glamorous.form({
  display: 'flex',
  flexDirection: 'row',
});

const Input = glamorous.input({
  minWidth: '100%',
  padding: '10px',
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
  fontSize: '16px',
  color: '#000',
  border: '1px solid #ccc',
  ':hover,:active,:focus': {
    borderColor: '#ffdb4d',
  },
  outlineColor: '#ffdb4d',
});

const Button = glamorous.button({
  fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
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
});

export default SearchForm;
