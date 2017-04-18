import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
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

        if (dropResult.name ==='BoardSquare'  && item.position ==='WaitingArea') {
            if (getDataStructer().getLength() >= getMaxNum()){
                alert('主数据区已满');
            return;
            }

            if (dropResult.id ===getDataStructer().getLength()){
                getDataStructer().append(item.id);
                console.log('append');
                refresh();
            }else{
                getDataStructer().insert(dropResult.id,item.id);
                console.log('insert');
              refresh();
            }
          }

    if (dropResult.name ==='WaitingArea'&& item.position !=='WaitingArea'){
        getDataStructer().remove(item.position);
        refresh();
        console.log('delete');
    }
  },
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class dataNode extends Component {
    // componentWillMount(){
    //   console.log("dataNode componentWillMount");
    // }

    render(){
        const { connectDragSource, isDragging,position } = this.props;

        let style = {opacity:isDragging? 0.4: 1,
            border: (position!=='WaitingArea')? '0.1px dashed #3399FF':'0.1px dashed #FFFFFF'};
        
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