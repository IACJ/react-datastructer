import React, { Component } from 'react';
import BinaryTreePosition from '../common/BinaryTreePosition';
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
                        width:'160px',
                        top: -30,
                        left: 43,
                        transform:'rotate(-20deg)'
                        }} >
            ___________________
        </font>
    );
          case 2: return (
        <font style={{...style,
                        width:'160px',
                        top: -30,
                        left: -160,
                        transform:'rotate(20deg)'
                        }} >
            ___________________
        </font>
    );
          case 3: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: 40,
                        transform:'rotate(-30deg)'
                        }} >
            _______
        </font>
    );
          case 4: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: -55,
                        transform:'rotate(30deg)'
                        }} >
            _______
        </font>
    );
          case 5: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: 40,
                        transform:'rotate(-30deg)'
                        }} >
            _______
        </font>
    );
          case 6: return (
        <font style={{...style,
                        width:'70px',
                        top: -30,
                        left: -55,
                        transform:'rotate(30deg)'
                        }} >
            _______
        </font>
    );
          case 7: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: 30,
                        transform:'rotate(-45deg)'
                        }} >
            ___
        </font>
    );
          case 8:  return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: 7,
                        transform:'rotate(45deg)'
                        }} >
            ___
        </font>
    );
          case 9: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: 25,
                        transform:'rotate(-45deg)'
                        }} >
            ___
        </font>
    );
          case 10: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: 0,
                        transform:'rotate(45deg)'                  }} >
            ___
        </font>
    );
        case 11: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: 21,
                        transform:'rotate(-45deg)'
                        }} >
            ___
        </font>
    );
          case 12: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: -7,
                        transform:'rotate(45deg)'                  }} >
            ___
        </font>
    );
        case 13: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: 15,
                        transform:'rotate(-45deg)'
                        }} >
            ___
        </font>
    );
          case 14: return (
        <font style={{...style,
                        width:'30px',
                        top: -29,
                        left: -15,
                        transform:'rotate(45deg)'                  }} >
            ___
        </font>
    );
        case 15: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 16: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
          case 17: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 18: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
       case 19: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 20: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
        case 21: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 22: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
       case 23: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 24: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
        case 25: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 26: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
        case 27: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 28: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );
        case 29: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 23,
                        transform:'rotate(-60deg)'
                        }} >
            __
        </font>
    );
          case 30: return (
        <font style={{...style,
                        width:'22px',
                        top: -25,
                        left: 14,
                        transform:'rotate(60deg)'                  }} >
            __
        </font>
    );       
          default:
        }


}

export default class Lines extends Component {


  render() {
    let style ={
        position:'absolute',
        left: '10px',
        ...BinaryTreePosition(this.props.id),
        zIndex:0,
    }
    return (
        <div className="Lines" style={style}>
            {LineSet(this.props.id)}
        </div>
    );
  }
}

