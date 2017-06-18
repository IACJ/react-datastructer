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
            <div className='overlay-div'
                style={{backgroundColor: color}}/>
        );
    }

    renderPiece(i){
        if (getDataStructer().get(i)== null){
            return null;
        }else{
            return  (
                <BoardSquare key={getDataStructer().getKey(i)}  id={i} position='MainArea'>
                    <DataNode id={getDataStructer().get(i)} 
                        position={i} 
                        />
                </BoardSquare>
            );
        }         
    }

  renderAll(){
    const all = [];
    
    for(let j=0;j<31;j++){
      all.push(this.renderPiece(j));
      all.push((this.renderPiece(j)===null)?null:<Lines id={j}/>);
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