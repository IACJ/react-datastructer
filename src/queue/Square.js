import React, { Component, PropTypes } from 'react';

export default class Square extends Component {
  static propTypes = {
    black: PropTypes.bool,
    children: PropTypes.node,
  };

  render() {
    const { black } = this.props;
    const color = black ? 'white' : 'black';

    return (
      <div
        style={{
          color,
          backgroundColor:'blue',
          border: '1px dashed gray',
          width: '100%',
          height: '100%',
        }}
      >
        
      </div>
    );
  }
}
