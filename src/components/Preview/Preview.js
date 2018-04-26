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
    this.onClose = this.onClose.bind(this);
    this.onChangeSelected = this.onChangeSelected.bind(this);
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

  onLoad() {
    this.setState({
      loaded: true,
    });
  }

  onChangeSelected(destination) {
    this.props.collections.slideNext(destination);
  }

  onClose() {
    this.props.collections.clearSelection();
    this.setState({
      loaded: false,
      showTooltip: false,
    });
  }

  onKeyDown(e) {
    if (e.keyCode) {
      // eslint-disable-next-line
      switch (e.keyCode) {
        case KEY_ARROW_LEFT:
          this.onChangeSelected(DESTINATION_PREVIOUS);
          break;
        case KEY_ARROW_RIGHT:
          this.onChangeSelected(DESTINATION_NEXT);
          break;
        case KEY_ESC:
          this.onClose();
      }
    }
  }

  onMouseMove() {
    this.setState(prevState => ({
      showTooltip: !prevState.showTooltip,
    }));
  }

  onSwipe(direction) {
    if (direction === 'left' || direction === 'down') {
      this.onChangeSelected(DESTINATION_PREVIOUS);
    } else if (direction === 'right' || direction === 'up') {
      this.onChangeSelected(DESTINATION_NEXT);
    }
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
        onClose={this.onClose}
        onChangeSelected={this.onChangeSelected}
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
              <Tooltip id="preview-tooltip" showTooltip={showTooltip && loaded}>
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
