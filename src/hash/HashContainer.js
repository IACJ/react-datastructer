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
          <font className="h2">哈希表(HashTable):</font>
    
          {/*按钮列表*/}
          <RaisedButton label="清理墓碑(重构)" primary={true} className="btn" onTouchTap={ 
            function(){
              getDataStructer().cleanDeath();
              refresh();
            }}/>
          <RaisedButton label="扩容并重构" primary={true} className="btn" onTouchTap={ 
            function(){
               if (getDataStructer().getLength() >= getMaxNum()){
                alert('主数据区已满');
                return;
              } 
              getDataStructer().appendLenth();
              refresh();
            }}/>
      
          <RaisedButton label="随机增添一个数据" primary={true} className="btn" onTouchTap={ 
            function(){ 
              {/*if (getDataStructer().getLength() >= getMaxNum()){
                alert('主数据区已满');
                return;
              } */}
              getDataStructer().randomAdd();
              refresh();
            }}/>
        
        
          <RaisedButton label="重新开始" primary={true} className="btn" onTouchTap={ 
            function(){
              reBegin();
            }}/>
          
          <MyDialog label="帮助" title="哈希表(HashTable)" secondary={true} src="https://github.com/IACJ/react-datastructer/blob/master/src/hash/HashTable.js">
            <h4>哈希表(Hash table，也叫散列表) 是根据键（Key）而直接访问在内存存储位置的数据结构。</h4>
            <p> 它通过计算一个关于键值的函数，将所需查询的数据映射到表中一个位置来访问记录。</p>
            <p> 这加快了查找速度。这个映射函数称做散列函数，存放记录的数组称做散列表。</p>
            <p> 本样例中，哈希函数 : Hash(e) = e * e % length</p>
            <p> 探测函数 : Prob(i) = i * i</p>
            <p> 请通过“拖拽”或“点击按钮”进行操作</p>
            <p>(提示：打开console查看数据结构操作的log)</p>
          </MyDialog>
          
        </div>
      <MainArea fuck={this.state}/>
      <WaitingArea />
    </div>);
  }
}