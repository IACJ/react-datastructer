import React, { Component } from 'react';

import BinaryTreePosition from '../common/BinaryTreePosition';


class BoardSquare extends Component {

  render() {
      let {children} = this.props;

      if (this.props.position ==='WaitingArea'){
          return( 
              <div style={{ width: '10%'}}>
                  {children}
              </div>
          )
      }

      let style={
            width: '52px',
            position:'absolute',
            left: '10px',
            transitionProperty:'all',
            transitionDuration:'1s',
            zIndex:100,
        }
 
    style = {...style,...BinaryTreePosition(this.props.id)};

      return (
          <div style={style}>
              {children}

          </div>
      );
    }
}
export default BoardSquare;