import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from '../common/ItemTypes';
import {getDataStructer,refresh,getMaxNum} from './Control';
import '../common/activeNode.css';


const dataNodeSource = {
    beginDrag(props, monitor, component) {
        return {
            name:'dataNode',
            id : props.id,
            position : props.position,
        }
    },
    endDrag(props, monitor) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();

        if(!dropResult){
          return;
        }

        if (dropResult.name ==='MainArea'  && item.position ==='WaitingArea') {
            if (getDataStructer().getLength() >= getMaxNum()){
            alert('主数据区已满');
            return;
            } 
            getDataStructer().append(item.id);
            refresh();
            console.log('调用append函数:数值:'+item.id);
        }

        if (dropResult.name ==='WaitingArea'&& item.position !=='WaitingArea'){
            getDataStructer().remove(item.position);
            refresh();
            console.log('调用delete : position:'+item.position );
        }
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class dataNode extends Component {


    render(){
        const { connectDragSource, isDragging } = this.props;

        let style = {opacity:isDragging? 0.4: 1};
        
        switch(this.props.id){
            case 0: style.backgroundColor= '#24c9b3';
            break;
            case 1: style.backgroundColor= '#92c7be';
            break;
            case 2: style.backgroundColor= '#A6EEE8';
            break;
            case 3: style.backgroundColor= '#C2EAEF';
            break;
            case 4: style.backgroundColor= '#B9EED0';
            break;
            case 5: style.backgroundColor= '#D9D4B7';
            break;
            case 6: style.backgroundColor= '#D5BA7D';
            break;
            case 7: style.backgroundColor= '#EDCFB3';
            break;
            case 8: style.backgroundColor= '#F2AEA4';
            break;
            case 9: style.backgroundColor= '#FB6270';
            break;  
            default:
        }
      
        return connectDragSource(
            <div className="dataNode" style={style}>
                <p >{this.props.id}</p>
            </div>
        );
    }
}
export default DragSource(ItemTypes.DATANODE, dataNodeSource, collect)(dataNode);