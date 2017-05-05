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
                    <font className="h2">队列 (Queue):</font>

                    {/*按钮列表*/}
                    <RaisedButton label="出队列" primary={true} className="btn" onTouchTap={ 
                        function(){
                            //console.log('调用remove函数: '+getDataStructer().remove(0));
                            getDataStructer().pop();
                            refresh();
                            }}/>

                    <RaisedButton label="随机增添一个数据" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            if (getDataStructer().getLength() >= getMaxNum()){
                                alert('主数据区已满');
                                return;
                            } 
                            getDataStructer().randomAdd();
                            refresh();
                        }}/>
                    <RaisedButton label="清零" primary={true} className="btn" onTouchTap={ 
                        function(){
                            getDataStructer().clear();
                            console.log('调用clear函数');
                            refresh();

                        }}/>

                    <RaisedButton label="重新开始" primary={true} className="btn" onTouchTap={ 
                        function(){
                            reBegin();
                        }}/>


                    <MyDialog label="帮助" title="队列(Queue)" secondary={true} >
                        <h4>队列是一种特殊的线性表</h4>
                        <p> 它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作</p>
                        <p> 队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：根据队列性质，已对拖拽进行相应限制，试试看！)</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}