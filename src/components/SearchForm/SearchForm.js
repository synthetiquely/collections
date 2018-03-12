import React from 'react';
import glamorous from 'glamorous';
import TextInput from '../styled/TextInput';
import Button from '../styled/Button';

const SearchForm = () => (
  <Form>
    <TextInput
      type="text"
      id="search"
      name="search"
      placeholder="Поиск по коллекциям"
    />
    <Button type="submit">Найти</Button>
  </Form>
);

const Form = glamorous.form({
  display: 'flex',
  flexDirection: 'row',
});

export default SearchForm;
