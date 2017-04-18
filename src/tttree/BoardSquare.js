import React, { Component } from 'react';


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
            marginLeft: '0.rem',
            marginRight: '0.rem',
            position:'relative',
        }
      return (
          <div style={style}>
              {children}
          </div>
      );
    }
}
export default BoardSquare;