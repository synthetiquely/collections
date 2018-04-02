import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Spinner from '../styled/Spinner';
import CenteredContainer from '../styled/CenteredContainer';
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
          <CenteredContainer>
            <Spinner size="lg" />
          </CenteredContainer>
        )}
      </div>
    );
  }
}

export default InfiniteScoll;
