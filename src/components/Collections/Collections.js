import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';

import Views from '../Views/Views';
import Preview from '../Preview/Preview';

@inject('collections', 'search')
@observer
class Collections extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChangeSelected = this.onChangeSelected.bind(this);
    this.onClose = this.onClose.bind(this);
  }

  onClick(index) {
    return () => this.props.collections.selectPhoto(index);
  }

  onChangeSelected(e, destination) {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }

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
      </React.Fragment>
    );
  }
}

export default Collections;
