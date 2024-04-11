import React, { Component } from 'react';
import loadable from '@loadable/component';

const ErrorDisplay = loadable(() => import('../components/ErrorDisplay'));

class ErrorPage extends Component {
  state = {
    message: '',
  };

  componentDidCatch(error, info) {
    if (error) {
      this.setState({ message: error.message });
      console.error(error, info);
    }
  }

  render() {
    const { children } = this.props;
    const { message } = this.state;

    return message ? <ErrorDisplay>{message}</ErrorDisplay> : children;
  }
}

export default React.memo(ErrorPage);
