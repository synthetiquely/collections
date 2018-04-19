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
    document.body.addEventListener('keydown', this.onKeyDown);
  }

  componentDidUpdate() {
    if (this.props.collections.selectedPhoto) {
      document.body.classList.add('overlayed');
    } else {
      document.body.classList.remove('overlayed');
    }
  }

  componentWillUnmount() {
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

    if (!this.props.collections.selectedPhoto) {
      return null;
    }

    return (
      <Modal
        bgColor={!loaded && this.props.collections.selectedPhoto.color}
        {...this.props}
      >
        <Swipe onSwipe={this.onSwipe}>
          <a href={this.props.collections.selectedPhoto.url} target="_blank">
            <Image
              style={{ width: 'auto', maxWidth: '100%', objectFit: 'contain' }}
              loaded={loaded}
              src={this.props.collections.selectedPhoto.fullsrc}
              alt={this.props.collections.selectedPhoto.description}
              onLoad={this.onLoad}
              onMouseEnter={this.onMouseMove}
              onMouseLeave={this.onMouseMove}
            />
            {loaded && (
              <Tooltip showTooltip={showTooltip}>
                <TooltipText>
                  {this.props.collections.selectedPhoto.user.username}
                </TooltipText>
              </Tooltip>
            )}
          </a>
        </Swipe>
      </Modal>
    );
  }
}

export default Preview;
