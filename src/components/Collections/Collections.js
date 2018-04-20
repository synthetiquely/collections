import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Views from '../Views/Views';
import Preview from '../Preview/Preview';
import ScrollToTop from '../ScrollToTop/ScrollToTop';

@inject('collections', 'search')
@observer
class Collections extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, { passive: true });
    this.onResize();
    this.props.search.loadItems();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize);
  }

  onResize() {
    const clientHeight = Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0,
    );
    const clientWidth = Math.max(
      document.documentElement.clientHeight,
      window.innerHeight || 0,
    );

    this.props.search.recalculateLimit(clientHeight, clientWidth);
  }

  onClick(id) {
    return () => this.props.collections.selectPhoto(id);
  }

  render() {
    return (
      <React.Fragment>
        <Views
          images={this.props.collections.photos}
          isOpen={this.props.collections.selectedPhoto !== null}
          isLoading={this.props.search.isLoading}
          loadItems={this.props.search.loadItems}
          onClick={this.onClick}
        />
        <Preview
          collections={this.props.collections}
          onClose={this.onClose}
          onChangeSelected={this.onChangeSelected}
        />
        <ScrollToTop show={this.props.collections.selectedPhoto === null} />
      </React.Fragment>
    );
  }
}

export default Collections;
