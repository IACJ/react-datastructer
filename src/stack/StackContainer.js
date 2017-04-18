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
                    <font className="h2">栈 (Stack):</font>

                    {/*按钮列表*/}
                    <RaisedButton label="出栈" primary={true} className="btn" onTouchTap={ 
                        function(){
                            //console.log('调用remove函数: '+getDataStructer().remove(0));
                            getDataStructer().pop();
                            refresh();
                            }}/>

                    <RaisedButton label="随机增添入栈" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            if (getDataStructer().getLength() >= getMaxNum()){
                                alert('主数据区已满');
                                return;
                            } 
                            getDataStructer().randomAdd();
                            console.log('调用randomAdd函数');
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


                    <MyDialog label="帮助" title="栈（stack）" colored={true} >
                        <h4>栈（stack）又名堆栈(港澳台译作堆叠),是一种受限的线性表</h4>
                        <p> 其限制是仅允许在表的一端进行插入和删除运算,这一端被称为栈顶，相对地，把另一端称为栈底。</p>
                        <p> 向一个栈插入新元素又称作进栈、入栈或压栈；从一个栈删除元素又称作出栈或退栈。</p>
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