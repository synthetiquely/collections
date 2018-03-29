import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Views from '../Views/Views';
import Preview from '../Preview/Preview';

import * as constants from '../../constants';

@inject('collections')
@observer
class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.onClick = this.onClick.bind(this);
    this.onChangeSelected = this.onChangeSelected.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick(index) {
    return () =>
      this.setState({
        selected: index,
      });
  }

  onChangeSelected(e, destination) {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }

    if (destination === constants.DESTINATION_NEXT) {
      if (this.props.collections.photos[this.state.selected + 1]) {
        this.setState(prevState => ({
          selected: prevState.selected + 1,
        }));
      } else {
        this.setState({
          selected: 0,
        });
      }
    } else if (destination === constants.DESTINATION_PREVIOUS) {
      if (this.props.collections.photos[this.state.selected - 1]) {
        this.setState(prevState => ({
          selected: prevState.selected - 1,
        }));
      } else {
        this.setState({
          selected: this.props.collections.photos.length - 1,
        });
      }
    }
  }

  onClose() {
    this.setState({
      selected: null,
    });
  }

  render() {
    const { selected } = this.state;

    return (
      <React.Fragment>
        <Views
          images={this.props.collections.photos}
          isOpen={selected !== null}
          isLoading={this.props.collections.isLoading}
          loadItems={this.props.collections.loadItems}
          onClick={this.onClick}
        />
        {selected !== null && (
          <Preview
            image={this.props.collections.photos[selected]}
            description={this.props.collections.photos[selected].description}
            onClose={this.onClose}
            onChangeSelected={this.onChangeSelected}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Collections;
