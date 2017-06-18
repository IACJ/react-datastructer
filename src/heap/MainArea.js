import React, {Component} from 'react';
import BoardSquare from './BoardSquare';
import {getDataStructer} from './Control';
import { DropTarget } from 'react-dnd';
import DataNode from './DataNode';
import ItemTypes from '../common/ItemTypes';
import '../common/activeNode.css';
import Lines from '../common/Lines'

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
  
  renderAll(){
    const all = [];
    
    for(let j=0;j<31;j++){
      all.push(
        <BoardSquare key={getDataStructer().getKey(j)}  id={j} position='MainArea'>
          {this.renderPiece(j)}
        </BoardSquare>
      );
      all.push ((this.renderPiece(j)===null)?null:<Lines id={j}/>);
    }
    return all;
  }
  
  render(){
    const { connectDropTarget,isOver, canDrop, } = this.props;
    const levels = [];
    levels.push(this.renderAll());
 
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