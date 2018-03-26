import React, { Component } from 'react';
import Spinner from '../styled/Spinner';
import CenteredContainer from '../styled/CenteredContainer';
import { SCROLL_THESHOLD } from '../../constants';

class InfiniteScoll extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
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
    window.removeEventListener('scroll', this.onScroll);
  }

  onScroll() {
    if (this.container && !this.state.loading) {
      const containerHeight = this.container.clientHeight;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const windowHeight =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight;

      if (scrollTop + windowHeight >= containerHeight - SCROLL_THESHOLD) {
        this.setState({
          loading: true,
        });
        this.loadMore();
      }
    }
  }

  setRef(node) {
    this.container = node;
  }

  loadMore() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div style={{ overflow: 'auto' }} ref={this.setRef}>
        {this.props.children}
        {this.state.loading && (
          <CenteredContainer>
            <Spinner />
          </CenteredContainer>
        )}
      </div>
    );
  }
}

export default InfiniteScoll;
