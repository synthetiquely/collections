import React, { Component } from 'react';
import glamorous from 'glamorous';

import Preview from './components/Preview';
import View from './components/View';
import api from './api';

class Collections extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
    this.onClose = this.onClose.bind(this);
    this.onNext = this.onNext.bind(this);
    this.onPrevious = this.onPrevious.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onClick(index) {
    this.setState({
      selected: index,
    });
  }

  onKeyDown(e) {
    if (this.state.selected !== null && e.keyCode) {
      switch (e.keyCode) {
        case 37:
          this.onPrevious();
          break;
        case 39:
          this.onNext();
          break;
        default:
          break;
      }
    }
  }

  onNext(e) {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }

    if (api[this.state.selected + 1]) {
      this.setState(prevState => ({
        selected: prevState.selected + 1,
      }));
    } else {
      this.setState({
        selected: 0,
      });
    }
  }

  onPrevious(e) {
    if (e) {
      e.stopPropagation();
      e.nativeEvent.stopImmediatePropagation();
    }

    if (api[this.state.selected - 1]) {
      this.setState(prevState => ({
        selected: prevState.selected - 1,
      }));
    } else {
      this.setState({
        selected: api.length - 1,
      });
    }
  }

  onClose() {
    this.setState({
      selected: null,
    });
  }

  renderItems() {
    return api.map((item, index) => (
      <View
        src={item.src}
        title={item.title}
        key={item.id}
        onClick={() => this.onClick(index)}
      />
    ));
  }

  render() {
    const { selected } = this.state;
    return (
      <Views isOpen={selected !== null}>
        {this.renderItems()}
        {selected !== null && (
          <Preview
            isOpen={selected !== null}
            src={api[selected].src}
            id={api[selected].id}
            title={api[selected].title}
            onClose={this.onClose}
            onNext={this.onNext}
            onPrevious={this.onPrevious}
          />
        )}
      </Views>
    );
  }
}

const Views = glamorous.section(
  {
    display: 'flex',
    flexWrap: 'wrap',
    '@media only screen and (min-width: 768px)': {
      '&::after': {
        content: "''",
        flexGrow: '999999999',
      },
    },
  },
  ({ isOpen }) => ({
    overflowY: isOpen ? 'hidden' : 'auto',
  }),
);

export default Collections;
