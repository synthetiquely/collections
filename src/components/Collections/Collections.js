import React, { Component } from 'react';

import Views from '../Views/Views';
import Preview from '../Preview/Preview';
import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';

import * as constants from '../../constants';

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

    const { images } = this.props;
    if (destination === constants.DESTINATION_NEXT) {
      if (images[this.state.selected + 1]) {
        this.setState(prevState => ({
          selected: prevState.selected + 1,
        }));
      } else {
        this.setState({
          selected: 0,
        });
      }
    } else if (destination === constants.DESTINATION_PREVIOUS) {
      if (images[this.state.selected - 1]) {
        this.setState(prevState => ({
          selected: prevState.selected - 1,
        }));
      } else {
        this.setState({
          selected: images.length - 1,
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
    const { images } = this.props;

    return (
      <InfiniteScroll>
        <Views
          images={images}
          isOpen={selected !== null}
          onClick={this.onClick}
        />
        {selected !== null && (
          <Preview
            src={images[selected].src}
            id={images[selected].id}
            title={images[selected].title}
            onClose={this.onClose}
            onChangeSelected={this.onChangeSelected}
          />
        )}
      </InfiniteScroll>
    );
  }
}

export default Collections;
