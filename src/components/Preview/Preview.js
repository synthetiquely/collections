import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Modal from '../Modal/Modal';
import Swipe from '../Swipe/Swipe';
import Image from '../styled/Image';
import Tooltip from '../styled/Tooltip';
import TooltipText from '../styled/TooltipText';

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
    this.state = { showTooltip: false, loaded: false };
    this.onLoad = this.onLoad.bind(this);
    this.onSwipe = this.onSwipe.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    body.classList.add('overlayed');
    document.body.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    body.classList.remove('overlayed');
    document.body.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (e.keyCode) {
      // eslint-disable-next-line
      switch (e.keyCode) {
        case KEY_ARROW_LEFT:
          this.props.onChangeSelected(DESTINATION_PREVIOUS);
          break;
        case KEY_ARROW_RIGHT:
          this.props.onChangeSelected(DESTINATION_NEXT);
          break;
        case KEY_ESC:
          this.props.onClose();
      }
    }
  }

  onSwipe(direction) {
    if (direction === 'left' || direction === 'down') {
      this.props.onChangeSelected(DESTINATION_PREVIOUS);
    } else if (direction === 'right' || direction === 'up') {
      this.props.onChangeSelected(DESTINATION_NEXT);
    }
  }

  onMouseMove() {
    this.setState(prevState => ({
      showTooltip: !prevState.showTooltip,
    }));
  }

  onLoad() {
    this.setState({
      loaded: true,
    });
  }

  render() {
    const { showTooltip, loaded } = this.state;
    return (
      <Modal
        bgColor={!loaded && this.props.image.color}
        onMouseEnter={this.onMouseMove}
        onMouseLeave={this.onMouseMove}
        {...this.props}
      >
        <Swipe onSwipe={this.onSwipe}>
          <a href={this.props.image.url} target="_blank">
            <Image
              style={{ width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
              loaded={loaded}
              src={this.props.image.fullsrc}
              alt={this.props.image.description}
              onLoad={this.onLoad}
            />
            {loaded && (
              <Tooltip showTooltip={showTooltip}>
                <TooltipText>{this.props.image.user.username}</TooltipText>
              </Tooltip>
            )}
          </a>
        </Swipe>
      </Modal>
    );
  }
}

export default Preview;
