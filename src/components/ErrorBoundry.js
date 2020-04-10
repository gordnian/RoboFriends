import React, { Component } from "react";

// eslint-disable-next-line react/prefer-stateless-function
class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <h1>Oooops, that is not good</h1>;
    }
    return children;
  }
}

export default ErrorBoundry;
