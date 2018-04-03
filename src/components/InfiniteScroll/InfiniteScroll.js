import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Spinner from '../styled/Spinner';
import Button from '../styled/Button';
import Container from '../styled/Container';
import { SCROLL_THESHOLD } from '../../constants';

@observer
class InfiniteScoll extends Component {
  constructor(props) {
    super(props);
    this.container = null;
    this.onScroll = this.onScroll.bind(this);
    this.setRef = this.setRef.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, {
      capture: true,
      passive: true,
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, {
      capture: true,
      passive: true,
    });
  }

  onScroll() {
    if (this.container && !this.props.isLoading) {
      const containerHeight = this.container.clientHeight;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      if (scrollTop + windowHeight >= containerHeight - SCROLL_THESHOLD) {
        this.loadMore();
      }
    }
  }

  setRef(node) {
    this.container = node;
  }

  loadMore() {
    if (!this.props.isLoading) {
      this.props.loadMore();
    }
  }

  render() {
    return (
      <div ref={this.setRef}>
        {this.props.children}
        {this.props.isLoading && (
          <Container centered>
            <Spinner size="lg" />
          </Container>
        )}
        {!this.props.isLoading && (
          <Container
            className="mobile-invisible"
            style={{ marginTop: '45px' }}
            centered
            fullWidth
          >
            <Button inverted size="fullWidth" onClick={this.loadMore}>
              Загрузить еще
            </Button>
          </Container>
        )}
      </div>
    );
  }
}

export default InfiniteScoll;
