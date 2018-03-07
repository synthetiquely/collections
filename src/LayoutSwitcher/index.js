import React, { Component } from 'react';
import glamorous from 'glamorous';

class LayoutSwitcher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'instagram',
    };
    this.onSelectLayout = this.onSelectLayout.bind(this);
  }

  onSelectLayout(e) {
    e.preventDefault();
    this.setState({
      active: e.currentTarget.name,
    });
  }

  render() {
    const { active } = this.state;
    return (
      <Form>
        <Switch
          active={active === 'instagram'}
          id="switcher"
          name="instagram"
          title="Instagram-like layout"
          onClick={this.onSelectLayout}
        >
          <i className="fab fa-instagram" />
        </Switch>
        <Switch
          active={active === 'google'}
          id="switcher"
          name="google"
          title="Google Images-like layout"
          onClick={this.onSelectLayout}
        >
          <i className="fab fa-google" />
        </Switch>
        <Switch
          active={active === 'pinterest'}
          id="switcher"
          name="pinterest"
          title="Pinterest-like layout"
          onClick={this.onSelectLayout}
        >
          <i className="fab fa-pinterest-p" />
        </Switch>
      </Form>
    );
  }
}

export default LayoutSwitcher;

const Form = glamorous.form({
  display: 'flex',
  flexDirection: 'row',
  position: 'absolute',
  right: '0',
});

const Switch = glamorous.button(
  {
    border: 'none',
    backgroundColor: '#fff',
    cursor: 'pointer',
    fontSize: '18px',
    ':hover,:active,:focus': {
      color: '#ffdb4d',
      outlineColor: '#fff',
    },
  },
  ({ active }) => ({
    color: active ? '#ffdb4d' : '#a9a9a9',
  }),
);
