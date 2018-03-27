import React, { Component } from 'react';
import { observer } from 'mobx-react';
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
  maxWidth: '75vw',
  maxHeight: '75vh',
  objectFit: 'contain',
});

const body = document.getElementsByTagName('body')[0];

@observer
class Preview extends Component {
  constructor(props) {
    super(props);
    this.onSwipe = this.onSwipe.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    body.classList.add('overlayed');
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    body.classList.remove('overlayed');
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
    const { image, ...rest } = this.props;
    return (
      <Modal {...rest}>
        <Swipe onSwipe={this.onSwipe}>
          <Image src={image.src} alt={image.description} />
        </Swipe>
      </Modal>
    );
  }
}

export default Preview;
