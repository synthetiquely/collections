import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  width: '100%',
  height: '100%',
});

class Swipe extends Component {
  constructor(props) {
    super(props);
    this.surface = null;
    this.state = {
      startX: 0,
      startY: 0,
      distX: 0,
      distY: 0,
      threshold: 150,
      restraint: 100,
      allowedTime: 200,
      startTime: 0,
      direction: 'none',
    };
    this.setRef = this.setRef.bind(this);
    this.onTouchStart = this.onTouchStart.bind(this);
    this.onTouchMove = this.onTouchMove.bind(this);
    this.onTouchEnd = this.onTouchEnd.bind(this);
  }

  onTouchStart(e) {
    const touchObj = e.changedTouches[0];
    this.setState({
      distX: 0,
      distY: 0,
      direction: 'none',
      startX: touchObj.pageX,
      startY: touchObj.pageY,
      startTime: new Date().getTime(),
    });
  }

  onTouchMove(e) {
    const touchObj = e.changedTouches[0];
    const { startX, startY } = this.state;
    const distX = touchObj.pageX - startX;
    const distY = touchObj.pageY - startY;

    if (Math.abs(distX) > Math.abs(distY)) {
      this.setState({
        distX,
        distY,
        direction: distX < 0 ? 'left' : 'right',
      });
    } else {
      this.setState({
        distX,
        distY,
        direction: distY < 0 ? 'up' : 'down',
      });
    }
  }

  onTouchEnd(e) {
    e.preventDefault();

    const {
      startTime,
      allowedTime,
      distX,
      distY,
      threshold,
      restraint,
      direction,
    } = this.state;

    const elapsedTime = new Date().getTime() - startTime;
    if (elapsedTime <= allowedTime) {
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) {
        this.handleSwipe(direction);
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) {
        this.handleSwipe(direction);
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
      <Container
        onTouchStart={this.onTouchStart}
        onTouchMove={this.onTouchMove}
        onTouchEnd={this.onTouchEnd}
        innerRef={this.setRef}
      >
        {this.props.children}
      </Container>
    );
  }
}

export default Swipe;
