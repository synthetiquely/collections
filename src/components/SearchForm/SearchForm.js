import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import Form from '../styled/Form';
import TextInput from '../styled/TextInput';
import Button from '../styled/Button';
import Error from '../Error/Error';

@inject('search')
@observer
class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({
      term: event.currentTarget.value,
    });
  }

  onSubmit(event) {
    event.preventDefault();

    if (!this.state.term) {
      return;
    }

    this.props.search.setSearchTerm(this.state.term);
  }

  render() {
    return (
      <React.Fragment>
        <Form onSubmit={this.onSubmit}>
          <TextInput
            type="text"
            id="search"
            name="search"
            placeholder="Поиск по коллекциям"
            autoFocus
            value={this.state.term}
            onChange={this.onChange}
          />
          <Button loading={this.props.search.isLoading} type="submit">
            Найти
          </Button>
        </Form>
        {this.props.search.error && <Error />}
      </React.Fragment>
    );
  }
}
export default SearchForm;
