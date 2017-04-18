import React, { Component } from 'react';

const style = {
//   border: '1px dashed gray',
  position: 'absolute',
  background:'transparent',
  backgroundColor: 'white',
  padding: 0,
  top: -30,
  userSelect:'none',

};

function LineSet(i){

     switch(i){
          case 0: return null;
          case 1: return (
        <font style={{...style,
                        width:'1px',
                        top: -25,
                        left: 45,
                        transform:'rotate(-12deg)'
                        }} >
            _______________________________
        </font>
    );
          case 2: return (
        <font style={{...style,
                        width:'1px',
                        top: -20,
                        left: 45,
                        transform:'rotate(-90deg)'
                        }} >
            ______
        </font>
    );
          case 3: return (
        <font style={{...style,
                        width:'1px',
                        top: -85,
                        left: -210,
                        transform:'rotate(12deg)'
                        }} >
            _______________________________
        </font>
    );
          case 4: return (
        <font style={{...style,
                        width:'1px',
                        top: -22,
                        left: 50,
                        transform:'rotate(-45deg)'
                        }} >
             _________
        </font>
    );
          case 5: return (
        <font style={{...style,
                        width:'1px',
                        top: -15,
                        left: 45,
                        transform:'rotate(-90deg)'
                        }} >
            _______
        </font>
    );
          case 6: return (
        <font style={{...style,
                        width:'1px',
                        top: -75,
                        left: 11,
                        transform:'rotate(45deg)'
                        }} >
            _________
        </font>
    );
          case 7: return (
        <font style={{...style,
                        width:'1px',
                        top: -22,
                        left: 50,
                        transform:'rotate(-45deg)'
                        }} >
             _________
        </font>
    );
          case 8: return (
        <font style={{...style,
                        width:'1px',
                        top: -15,
                        left: 45,
                        transform:'rotate(-90deg)'
                        }} >
            _______
        </font>
    );
          case 9: return (
        <font style={{...style,
                        width:'1px',
                        top: -75,
                        left: 11,
                        transform:'rotate(45deg)'
                        }} >
            _________
        </font>
    );

           case 10: return (
        <font style={{...style,
                        width:'1px',
                        top: -22,
                        left: 50,
                        transform:'rotate(-45deg)'
                        }} >
             _________
        </font>
    );
          case 11: return (
        <font style={{...style,
                        width:'1px',
                        top: -15,
                        left: 45,
                        transform:'rotate(-90deg)'
                        }} >
            _______
        </font>
    );
          case 12: return (
        <font style={{...style,
                        width:'1px',
                        top: -75,
                        left: 11,
                        transform:'rotate(45deg)'
                        }} >
            _________
        </font>
    );
    
          default:
        }


}

export default class Lines extends Component {


  render() {
    return (
        <div className="Lines">
            {LineSet(this.props.id)}
        </div>
    );
  }
}

