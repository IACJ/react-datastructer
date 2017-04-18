import React, {Component} from 'react';
import BoardSquare from './BoardSquare';
import {getDataStructer} from './Control';
import { DropTarget } from 'react-dnd';
import DataNode from './DataNode';
import ItemTypes from '../common/ItemTypes';
import TTNode from './TTNode';
import '../common/activeNode.css';
import '../common/common.css';

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
        // console.log("render node"+i);
        if (null == getDataStructer().get(i)){
            return   null;
        }else{
            return  (
                <DataNode id={getDataStructer().get(i)} 
                    position={i} key={i}/>
            );
        }         
       
    }

    renderLevel(i){
        const level = [];

        const NUM = [0,1,4,13];
        level.push(<div key={100}  style={{flex:1}}></div>);

        for(let j=NUM[i];j<NUM[i+1];j++){
            level.push(

                <TTNode id={j} key={j}>
                    <BoardSquare key={2*j}  id={2*j} position='MainArea'>
                        {this.renderPiece(2*j)}
                    </BoardSquare>
                    <BoardSquare key={2*j+1}  id={2*j+1} position='MainArea'>
                        {this.renderPiece(2*j+1)}
                    </BoardSquare>
                </TTNode>
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
        for (let i = 0; i < 3; i ++) {
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