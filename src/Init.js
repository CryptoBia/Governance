import { Component } from "react";
import { connect } from "react-redux";

import { metamaskConnectInit } from "./reducers/metamask";

class Init extends Component {
  componentDidMount() {
    this.props.metamaskConnectInit();
  }
  render() {
    return this.props.children;
  }
}

export default connect(
  () => ({}),
  { metamaskConnectInit }
)(Init);