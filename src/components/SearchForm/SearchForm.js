import React from 'react';
import Form from '../styled/Form';
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

export default SearchForm;
