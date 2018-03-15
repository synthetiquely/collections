import React, { Component } from 'react';
import glamorous from 'glamorous';

import InfiniteScroll from '../InfiniteScroll/InfiniteScroll';
import Preview from '../Preview/Preview';
import View from '../View/View';
import * as constants from '../../constants';
import { imagesLoaded } from '../../utils/imageUtils';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      loading: true,
    };
    this.galleryElement = null;
    this.onClose = this.onClose.bind(this);
    this.onChangeLoading = this.onChangeLoading.bind(this);
    this.onChangeSelected = this.onChangeSelected.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.setRef = this.setRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onClick(index) {
    this.setState({
      selected: index,
    });
  }

  onKeyDown(e) {
    if (this.state.selected !== null && e.keyCode) {
      switch (e.keyCode) {
        case constants.KEY_ARROW_LEFT:
          this.onChangeSelected(null, constants.DESTINATION_PREVIOUS);
          break;
        case constants.KEY_ARROW_RIGHT:
          this.onChangeSelected(null, constants.DESTINATION_NEXT);
          break;
      }
    }
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

  onChangeLoading() {
    const isLoaded = !imagesLoaded(this.galleryElement);

    this.setState({
      loading: isLoaded,
    });
  }

  onClose() {
    this.setState({
      selected: null,
    });
  }

  setRef(element) {
    this.galleryElement = element;
  }

  renderItems() {
    if (!this.props.images) {
      return null;
    }
    return this.props.images.map((item, index) => (
      <View
        src={item.src}
        title={item.title}
        key={item.id}
        loaded={!this.state.loading}
        onClick={() => this.onClick(index)}
        onChangeLoading={this.onChangeLoading}
      />
    ));
  }

  render() {
    const { selected } = this.state;
    const { images } = this.props;

    return (
      <InfiniteScroll>
        <Views innerRef={this.setRef} isOpen={selected !== null}>
          {this.renderItems()}
          {selected !== null && (
            <Preview
              src={images[selected].src}
              id={images[selected].id}
              title={images[selected].title}
              onClose={this.onClose}
              onChangeSelected={this.onChangeSelected}
            />
          )}
        </Views>
      </InfiniteScroll>
    );
  }
}

const Views = glamorous.section(
  {
    display: 'flex',
    flexWrap: 'wrap',
    '@media only screen and (min-width: 768px)': {
      '&::after': {
        content: "''",
        flexGrow: '999999999',
      },
    },
  },
  ({ isOpen }) => ({
    overflowY: isOpen ? 'hidden' : 'auto',
  }),
);

export default Collections;
