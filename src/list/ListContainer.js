import React, {Component} from 'react';
import MainArea from './MainArea';
import WaitingArea from './WaitingArea';
import { getRefresher,getDataStructer,refresh,reBegin,getMaxNum } from './Control';
import RaisedButton from 'material-ui/RaisedButton';
import '../common/common.css';
import MyDialog from '../common/MyDialog';

export default class Container extends Component {
  
  constructor(props){ 
    super(props);
    this.unobserve = getRefresher(this.forceUpdate.bind(this));
  }
  
  render(){
    return (
      <div className='container' >
        <div>
          <font className="h2">线性表(List):</font>
    
          {/*按钮列表*/}
          <RaisedButton label="移除首部" primary={true} className="btn" onTouchTap={ 
            function(){
              console.log('调用remove函数: '+getDataStructer().remove(0));
              refresh();
            }}/>
          <RaisedButton label="移除尾部" primary={true} className="btn" onTouchTap={ 
            function(){
              console.log('调用remove函数: '+getDataStructer()
              .remove(getDataStructer().length-1));
              refresh();
            }}/>
      
          <RaisedButton label="随机增添一个数据" primary={true} className="btn" onTouchTap={ 
            function(){ 
              if (getDataStructer().getLength() >= getMaxNum()){
                alert('主数据区已满');
                return;
              } 
              getDataStructer().randomAdd();
              console.log('调用randomAdd函数');
              refresh();
            }}/>
        
        
          <RaisedButton label="重新开始" primary={true} className="btn" onTouchTap={ 
            function(){
              reBegin();
            }}/>
          
          <MyDialog label="帮助" title="线性表(List)" secondary={true} src="https://github.com/IACJ/react-datastructer/blob/master/src/list/ArrayList.js">
            <h4>线性表(List) 是一类常见的简单数据结构。</h4>
            <p> 一个线性表是n个具有相同特性的数据元素的有限序列。数据元素是一个抽象的符号，其具体含义在不同的情况下一般不同。</p>
            <p> 线性表主要由顺序表示或链式表示。在实际应用中，常以栈、队列、字符串等特殊形式使用。</p>
            <p> 请通过“拖拽”或“点击按钮”进行操作</p>
            <p>(提示：打开console查看数据结构操作的log)</p>
          </MyDialog>
          
        </div>
      <MainArea fuck={this.state}/>
      <WaitingArea />
    </div>);
  }
}