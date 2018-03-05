import React, { Component } from 'react';
import glamorous from 'glamorous';

import ImagePreview from './components/ImagePreview';
import Image from './components/Image';
import api from './api';
// import calculateImageOrientation from '../utils/imageUtils';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.onClose = this.onClose.bind(this);
  }

  onClick(index) {
    this.setState({
      selected: index,
    });
  }

  onNext() {
    if (api[this.state.selected + 1]) {
      this.setState(prevState => ({
        selected: prevState.selected + 1,
      }));
    } else {
      this.setState({
        selected: 0,
      });
    }
  }

  onPrevious() {
    if (api[this.state.selected - 1]) {
      this.setState(prevState => ({
        selected: prevState.selected - 1,
      }));
    } else {
      this.setState({
        selected: api.length - 1,
      });
    }
  }

  onClose() {
    this.setState({
      selected: null,
    });
  }

  renderItems() {
    // @FIXME: Refactor transofrmation pipeline with rxJS when redux will be available
    return (
      api
        // .map(item => ({
        //   ...item,
        //   orientation: calculateImageOrientation(item.src),
        // }))
        .map((item, index) => (
          <Image
            src={item.src}
            title={item.title}
            orientation={item.orientation || 'even'}
            key={item.id}
            onClick={() => this.onClick(index)}
          />
        ))
    );
  }

  render() {
    const { selected } = this.state;
    return (
      <Views>
        {this.renderItems()}
        {selected && (
          <ImagePreview
            isOpen={!!selected}
            src={api[selected].src}
            id={api[selected].id}
            title={api[selected].title}
            onClose={this.onClose}
          />
        )}
      </Views>
    );
  }
}

const Views = glamorous.section({
  display: 'grid',
  gridGap: '10px',
  gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
  gridAutoRows: '75px',
  gridAutoFlow: 'dense',
  padding: '10px',
});

export default Collections;
