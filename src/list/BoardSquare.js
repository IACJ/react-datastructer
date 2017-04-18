import React, { Component } from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import {getDataStructer} from './Control';

const squareTarget = {
    canDrop(props, monitor) {
      if(monitor.getItem().position==="WaitingArea"&&props.position==="MainArea"){
        return true;
      }
      return false;
    },

  drop(props, monitor, component) {
   return {name:'BoardSquare',id:props.id};
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}


class BoardSquare extends Component {
    renderOverlay(color) {
      return (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            zIndex: 1,
            opacity: 0.5,
            backgroundColor: color,
          }}
        />
      );
    }

    processStyle(){
       let style = {
          border: '1px dashed gray',
          backgroundColor: '#AAAAFF',
          height: '110px',
          width: '100%',
          margin:'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',    
      };
      return style;
    }

  render() {
    //  console.log(renderSquare());
    // console.log(fuck());
    // let dom = fuck();
      let {position,id,isOver,canDrop} = this.props;
      

      if (this.props.position ==='WaitingArea'){
        let style={
            width: '10%',
        }
        return( 
        <div style={style}>
          {this.props.children}
        </div>)
      }
      if (position ==='MainArea' && id >getDataStructer().length){
        return null;
      }

      let style={
          
            backgroundColor: '#3399FF',
            height: '100px',
            position:'relative',
        }

    return this.props.connectDropTarget(
      <div style={style}>
        <h5 >{this.props.id}</h5>
       {this.props.children}
        {!isOver && canDrop && this.renderOverlay('#339900')}
        {isOver && canDrop && this.renderOverlay('green')}
      </div>
    );
  }
}
export default DropTarget(ItemTypes.DATANODE, squareTarget, collect)(BoardSquare);