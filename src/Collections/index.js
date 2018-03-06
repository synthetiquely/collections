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
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
  }

  onClick(index) {
    this.setState({
      selected: index,
    });
  }

  onNext(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
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

  onPrevious(e) {
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
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

  onClose(e) {
    console.log('Closed', e.target);

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
      <Views isOpen={selected !== null}>
        {this.renderItems()}
        {selected !== null && (
          <ImagePreview
            isOpen={selected !== null}
            src={api[selected].src}
            id={api[selected].id}
            title={api[selected].title}
            onClose={this.onClose}
            onNext={this.onNext}
            onPrevious={this.onPrevious}
          />
        )}
      </Views>
    );
  }
}

const Views = glamorous.section(
  {
    display: 'grid',
    gridGap: '10px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gridAutoRows: '75px',
    gridAutoFlow: 'dense',
    padding: '10px',
  },
  ({ isOpen }) => ({
    overflowY: isOpen ? 'hidden' : 'auto',
  }),
);

export default Collections;
