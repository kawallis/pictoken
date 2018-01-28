import React, { Component, Fragment } from 'react';
import antd from 'antd/dist/antd.min.css';
import slideDown from 'react-slidedown/lib/slidedown.css'

export default class Root extends Component {
  render() {
    const { children } = this.props;

    return (
      <Fragment>
        {children}
        <style jsx global>{antd}</style>
      </Fragment>
    )
  }
}
