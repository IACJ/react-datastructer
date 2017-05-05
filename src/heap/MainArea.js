import React, {Component} from 'react';
import BoardSquare from './BoardSquare';
import {getDataStructer} from './Control';
import { DropTarget } from 'react-dnd';
import DataNode from './DataNode';
import ItemTypes from '../common/ItemTypes';
import '../common/activeNode.css';

const areaTarget = {
  canDrop(props, monitor) {
    if(monitor.getItem().position==="WaitingArea"){
      return true;
    }else{
      return false;
    }       
  },
  
  drop(props, monitor, component) {
    return {name:'MainArea'};
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class MainArea extends Component {
  
  renderOverlay(color) {
    return (
      <div className='overlay-div' style={{backgroundColor: color}}/>
    );
  }
  
  renderPiece(i){
    if (i>=getDataStructer().getLength()){
      return null;
    }else{
      return  (
        <DataNode id={getDataStructer().get(i)} 
        position={i} />
      );
    }         
  }
  
  renderLevel(i){
    const level = [];
    
    level.push(<div key={100}  style={{flex:1}}></div>);
    for(let j=Math.pow(2,i)-1;j<Math.pow(2,i+1)-1;j++){
      level.push(
        <BoardSquare key={j}  id={j} position='MainArea'>
          {this.renderPiece(j)}
        </BoardSquare>
      );
    }
    level.push(<div key={101} style={{flex:1}}></div>);
    
    return (
      <div key={i} className="Row" >
        {level}
      </div>
    )
  }
  
  render(){
    const { connectDropTarget,isOver, canDrop, } = this.props;
    const levels = [];
    for (let i = 0; i < 5; i += 1) {
      levels.push(this.renderLevel(i));
    }        
    return connectDropTarget(

      <div className='MainArea'>
        {levels}
        {!isOver && canDrop && this.renderOverlay('yellow')}
        {isOver && canDrop && this.renderOverlay('green')}
     </div>

    );
  }
}
export default DropTarget(ItemTypes.DATANODE, areaTarget, collect)(MainArea);