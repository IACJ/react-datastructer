import React, {Component} from 'react';
import BoardSquare from './BoardSquare';
import {getDataStructer,getMaxNum} from './Control';
import DataNode from './DataNode';


const style = {
  display: 'flex',
  flexDirection: 'row', 
  flexWrap: 'no-wrap',
  alignItems: 'center',
};

export default class MainArea extends Component {
  
  renderSquare(i) {
    return (
    <div key={i}
        style={{ width: '60px', 
        height: '120px',
    }}>
      <BoardSquare id={i} position='MainArea'>
        {this.renderPiece(i)}
      </BoardSquare>
    </div>
  );}
  renderPiece(i){
    if (i>=getDataStructer().getLength()){
      return null;
    }else{
      return  <DataNode id={getDataStructer().get(i)} position={i} />
    } 
  }

  render(){
    const squares = [];
    for (let i = 0; i < getMaxNum(); i += 1) {
      squares.push(this.renderSquare(i));
    }        
    return (
      <div className='MainArea' style={style}>
        {squares}
      </div>
    );
  }
}