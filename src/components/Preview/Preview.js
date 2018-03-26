import React, { Component } from 'react';
import glamorous from 'glamorous';
import Modal from '../Modal/Modal';
import Swipe from '../Swipe/Swipe';
import {
  DESTINATION_PREVIOUS,
  DESTINATION_NEXT,
  KEY_ARROW_LEFT,
  KEY_ARROW_RIGHT,
  KEY_ESC,
} from '../../constants';

const Image = glamorous.img({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
});

class Preview extends Component {
  constructor(props) {
    super(props);
    this.onSwipe = this.onSwipe.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (e.keyCode) {
      // eslint-disable-next-line
      switch (e.keyCode) {
        case KEY_ARROW_LEFT:
          this.props.onChangeSelected(null, DESTINATION_PREVIOUS);
          break;
        case KEY_ARROW_RIGHT:
          this.props.onChangeSelected(null, DESTINATION_NEXT);
          break;
        case KEY_ESC:
          this.props.onClose();
      }
    }
  }

  onSwipe(direction) {
    if (direction === 'left' || direction === 'down') {
      this.props.onChangeSelected(null, DESTINATION_PREVIOUS);
    } else if (direction === 'right' || direction === 'up') {
      this.props.onChangeSelected(null, DESTINATION_NEXT);
    }
  }

  render() {
    const { src, title, ...rest } = this.props;
    return (
      <Modal {...rest}>
        <Swipe onSwipe={this.onSwipe}>
          <Image src={src} alt={title} />
        </Swipe>
      </Modal>
    );
  }
}

export default Preview;
