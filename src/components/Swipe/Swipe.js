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
    this.setRef = this.setRef.bind(this);
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
  }

  componentDidMount() {
    this.initListeners();
  }

  setRef(element) {
    this.surface = element;
  }

  handleSwipe(direction) {
    this.props.onSwipe(direction);
  }

  initListeners() {
    this.surface.addEventListener(
      'touchstart',
      (e) => {
        e.preventDefault();
        const touchObj = e.changedTouches[0];
        this.setState({
          distX: 0,
          distY: 0,
          direction: 'none',
          startX: touchObj.pageX,
          startY: touchObj.pageY,
          startTime: new Date().getTime(),
        });
      },
      false,
    );
    this.surface.addEventListener(
      'touchmove',
      (e) => {
        e.preventDefault();
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
      },
      false,
    );

    this.surface.addEventListener(
      'touchend',
      (e) => {
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
          } else if (
            Math.abs(distY) >= threshold &&
            Math.abs(distX) <= restraint
          ) {
            this.handleSwipe(direction);
          }
        }
      },
      false,
    );
  }

  render() {
    return <Container innerRef={this.setRef}>{this.props.children}</Container>;
  }
}

export default Swipe;
