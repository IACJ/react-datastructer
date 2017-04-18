import React, {Component} from 'react';
import MainArea from './MainArea';
import WaitingArea from './WaitingArea';
import { getRefresher,getDataStructer,refresh,reBegin } from './Control';
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
                    <font className="h2">堆(Heap):</font>

                    {/*按钮列表*/}
                    <RaisedButton label="移除堆顶" primary={true} className="btn" onTouchTap={ 
                        function(){
                            
                            console.log('调用removeTop函数: '+getDataStructer().removeTop());
                            refresh();
                            }}/>

                    <RaisedButton label="随机增添一个数据" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            if (getDataStructer().getLength() >= 31){
                                alert('主数据区已满');
                                return;
                            } 
                            getDataStructer().randomAdd();
                            console.log('调用randomAdd函数');
                            refresh();
                        }}/>

                    <RaisedButton label="大顶堆/小顶堆 翻转" primary={true} className="btn" onTouchTap={ 
                        function(){
                            getDataStructer().toggleMaxOrMinHeap();
                            console.log('调用toggleMaxOrMinHeap函数');
                            refresh();
                        }}/>
                    <RaisedButton label="重新开始" primary={true} className="btn" onTouchTap={ 
                        function(){
                            reBegin();
                        }}/>

                    <MyDialog label="帮助" title="堆(Heap)" colored={true} >
                        <h4>"堆"  是一类特殊的数据结构,满足如下性质:</h4>
                        <p> (1) 堆中某个节点的值总是不大于或不小于其父节点的值；</p>
                        <p> (2) 堆总是一棵完全二叉树。</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}
