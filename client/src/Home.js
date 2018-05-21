import React, { Component } from "react";
import {
  Container,
  Header,
  Segment,
  Button,
  Icon,
  Dimmer,
  Loader,
  Divider
} from "semantic-ui-react";

class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("component did mount");
  }

  render() {
    return <h2>Placeholder</h2>;
  }
}

export default Home;
