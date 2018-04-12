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
    this.onChangeSelected = this.onChangeSelected.bind(this);
    this.onClose = this.onClose.bind(this);
    this.onResize = this.onResize.bind(this);

    this.onResize();
    this.props.search.loadItems();
  }

  componentDidMount() {
    window.addEventListener('resize', this.onResize, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize, { passive: true });
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

  onClick(index) {
    return () => this.props.collections.selectPhoto(index);
  }

  onChangeSelected(destination) {
    this.props.collections.slideNext(destination);
  }

  onClose() {
    this.props.collections.clearSelection();
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
        {this.props.collections.selectedPhoto !== null && (
          <Preview
            image={
              this.props.collections.photos[
                this.props.collections.selectedPhoto
              ]
            }
            onClose={this.onClose}
            onChangeSelected={this.onChangeSelected}
          />
        )}
        {this.props.collections.selectedPhoto === null && <ScrollToTop />}
      </React.Fragment>
    );
  }
}

export default Collections;
