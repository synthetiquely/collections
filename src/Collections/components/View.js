import React, { Component } from 'react';
import glamorous from 'glamorous';

const Container = glamorous.div({
  flexGrow: '1',
  maxHeight: '300px',
  margin: '2.5px',
  ':hover': {
    boxShadow: '1px 1px 1px #ccc',
  },
  cursor: 'pointer',
});

const Image = glamorous.img(
  {
    maxWidth: '100%',
    minWidth: '100%',
    maxHeight: '300px',
  },
  ({ imageLoaded }) => {
    if (!imageLoaded) {
      return {
        backgroundRepeat: 'no-repeat',
        backgroundImage: 'linear-gradient(to right, #ffdb4d, #ffe78c)',
        backgroundSize: '100%, 100%',
        backgroundPosition: '0 0',
      };
    }
    return {};
  },
);
export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageLoaded: false,
    };
  }

  onLoad(status) {
    this.setState({
      imageLoaded: status,
    });
  }

  render() {
    const { title, src, onClick } = this.props;

    return (
      <Container onClick={onClick}>
        <Image
          src={src}
          alt={title}
          onLoad={() => this.onLoad(true)}
          imageLoaded={this.state.imageLoaded}
        />
      </Container>
    );
  }
}
