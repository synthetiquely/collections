import React, { Component } from 'react';
import { css } from 'glamor';
import Button from '../styled/Button';
import Icon from '../styled/Icon';
import { SCROLL_TO_TOP_LIMIT } from '../../constants';

const styles = css({
  position: 'fixed',
  bottom: '20px',
  right: '30px',
  zIndex: '10',
});

class ScrollToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll, {
      passive: true,
      capture: true,
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll, true);
  }

  onScroll() {
    if (
      document.body.scrollTop > SCROLL_TO_TOP_LIMIT ||
      document.documentElement.scrollTop > SCROLL_TO_TOP_LIMIT
    ) {
      if (!this.state.show) {
        this.setState({
          show: true,
        });
      }
    } else if (this.state.show) {
      this.setState({
        show: false,
      });
    }
  }

  onClick = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  render() {
    const { show } = this.state;
    if (show && this.props.show) {
      return (
        <div className={styles} title="Вернуться наверх">
          <Button bordered inverted type="button" onClick={this.onClick}>
            <Icon size="md">&uarr;</Icon>
          </Button>
        </div>
      );
    }

    return null;
  }
}

export default ScrollToTop;
