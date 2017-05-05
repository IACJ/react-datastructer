import React, { Component } from 'react';
import Lines from '../common/Lines'
import {getLevel} from './Control';


class BoardSquare extends Component {
    // componentWillMount(){
    //   console.log("BoardSquare componentWillMount");
    // } 

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
            marginLeft: '0.3rem',
            marginRight: '0.3rem',
            position:'relative',
        }

      switch(getLevel(this.props.id)){
          case 1:  style.marginLeft= '11.5rem';
                   style.marginRight= '11.5rem';
          break;
          case 2:  style.marginLeft= '5rem';
                   style.marginRight= '5rem';
          break;
          case 3:  style.marginLeft= '1.8rem';
                   style.marginRight= '1.8rem';
          break;
          case 4:  style.marginLeft= '0.1rem';
                   style.marginRight= '0.1rem';
          break;
          default:
      }


      return (
          <div style={style}>
              {children}
              {(children ===null)?null:<Lines id={this.props.id}/>}
          </div>
      );
    }
}
export default BoardSquare;