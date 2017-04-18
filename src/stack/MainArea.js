import React, {Component} from 'react';
import BoardSquare from './BoardSquare';
import {getDataStructer,getMaxNum} from './Control';
import DataNode from './DataNode';


const style = {
  display: 'flex',
  flexDirection: 'row', 
  flexWrap: 'no-wrap',
  alignItems: 'top',
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
        );
    }
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
            <div className='MainArea' >
                <div >
                    <h6 style={{textAlign:'left'}}>入队顺序:{getDataStructer().printinlist()}</h6>
                    
                </div>
                <div style={style}>
                    {squares}
                </div>
                <div >
                    <h6 style={{textAlign:'left'}}>出队顺序:{getDataStructer().printoutlist()}</h6>
                </div>
            </div>
        );
    }
}