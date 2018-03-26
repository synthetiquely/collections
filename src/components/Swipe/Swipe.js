import React, { Component } from 'react';
import glamorous from 'glamorous';

const SwipeContainer = glamorous.div({
  width: '100%',
  height: '100%',
  touchAction: 'none',
});

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.surface = null;
    this.direction = 'none';
    this.startX = 0;
    this.startY = 0;
    this.distX = 0;
    this.distY = 0;
    this.threshold = 150;
    this.restraint = 100;
    this.allowedTime = 200;
    this.startTime = 0;
    this.setRef = this.setRef.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  onTouchStart(e) {
    e.preventDefault();

    const touchObj = e.changedTouches[0];
    this.distX = 0;
    this.distY = 0;
    this.startX = touchObj.pageX;
    this.startY = touchObj.pageY;
    this.startTime = new Date().getTime();
    this.direction = 'none';
  }

  onTouchEnd(e) {
    e.preventDefault();

    const touchObj = e.changedTouches[0];
    this.distX = touchObj.pageX - this.startX;
    this.distY = touchObj.pageY - this.startY;

    if (Math.abs(this.distX) > Math.abs(this.distY)) {
      this.direction = this.distX < 0 ? 'left' : 'right';
    } else {
      this.direction = this.distY < 0 ? 'up' : 'down';
    }

    const elapsedTime = new Date().getTime() - this.startTime;
    if (elapsedTime <= this.allowedTime) {
      if (
        Math.abs(this.distX) >= this.threshold &&
        Math.abs(this.distY) <= this.restraint
      ) {
        this.handleSwipe(this.direction);
      } else if (
        Math.abs(this.distY) >= this.threshold &&
        Math.abs(this.distX) <= this.restraint
      ) {
        this.handleSwipe(this.direction);
      }
    }
  }

  setRef(element) {
    this.surface = element;
  }

  handleSwipe(direction) {
    this.props.onSwipe(direction);
  }

  render() {
    return (
      <SwipeContainer
        onTouchStart={this.onTouchStart}
        onTouchEnd={this.onTouchEnd}
        innerRef={this.setRef}
      >
        {this.props.children}
      </SwipeContainer>
    );
  }
}

export default Swipe;
