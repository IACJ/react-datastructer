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
                    <font className="h2">优先队列(PriorityQueue):</font>

                    {/*按钮列表*/}
                    <RaisedButton label="出队列" primary={true} className="btn" onTouchTap={ 
                        function(){
                            
                            console.log('调用removeTop函数: '+getDataStructer().removeTop());
                            refresh();
                            }}/>

                    <RaisedButton label="随机入队" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            if (getDataStructer().getLength() >= 31){
                                alert('主数据区已满');
                                return;
                            } 
                            getDataStructer().randomAdd();
                            console.log('调用randomAdd函数');
                            refresh();
                        }}/>

                    <RaisedButton label="log打印出/入队列顺序" primary={true} className="btn" onTouchTap={ 
                        function(){
                            console.log("入队列顺序:"+getDataStructer().printinlist());
                            console.log("出队列顺序:"+getDataStructer().printoutlist());
            
                        }}/>
                    <RaisedButton label="重新开始" primary={true} className="btn" onTouchTap={ 
                        function(){
                            reBegin();
                        }}/>

                    <MyDialog label="帮助" title="优先队列(priority queue)" secondary={true} src="https://github.com/IACJ/react-datastructer/blob/master/src/heap/Heap.js">
                        <h4>"优先队列(priority queue)"  是计算机科学中的一类抽象数据类型:</h4>
                        <p> (1) 优先队列中的每个元素都有各自的优先级，优先级最高的元素最先得到服务；</p>
                        <p> (2) 优先级相同的元素按照其在优先队列中的顺序得到服务；</p>
                        <p> (3) 优先队列往往用堆来实现.</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}
