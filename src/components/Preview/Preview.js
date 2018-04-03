import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Modal from '../Modal/Modal';
import Swipe from '../Swipe/Swipe';
import Image from '../styled/Image';

import {
  DESTINATION_PREVIOUS,
  DESTINATION_NEXT,
  KEY_ARROW_LEFT,
  KEY_ARROW_RIGHT,
  KEY_ESC,
} from '../../constants';

const body = document.getElementsByTagName('body')[0];

@observer
class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false };
    this.onLoad = this.onLoad.bind(this);
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

  onLoad() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { image, ...rest } = this.props;
    const { loaded } = this.state;
    return (
      <Modal {...rest}>
        <Swipe onSwipe={this.onSwipe}>
          <a href={image.url} target="_blank">
            <div
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: loaded ? 'transparent' : image.color,
              }}
            >
              <Image
                maxWidth="75vw"
                maxHeight="75vh"
                loaded={loaded}
                src={image.fullsrc}
                alt={image.description}
                onLoad={this.onLoad}
              />
            </div>
          </a>
        </Swipe>
      </Modal>
    );
  }
}

export default Preview;
