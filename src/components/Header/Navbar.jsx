import React, { Component } from 'react';
import {
  Header, HeaderName
} from 'carbon-components-react';

export default class Navbar extends Component {
  render() {
    return (
      <Header>
        <HeaderName prefix="IBM">Chat</HeaderName>
      </Header>
    )
  }
}
