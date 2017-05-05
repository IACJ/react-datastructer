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
                    <font className="h2">二三树 (Two Three Tree):</font>

                    {/*按钮列表*/}
                    <RaisedButton label="移除根节点左数据" primary={true} className="btn" onTouchTap={ 
                        function(){
                            
                            console.log('调用removeTop函数: '+getDataStructer().remove(0));
                            refresh();
                            }}/>

                    <RaisedButton label="随机增添一个数据" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            getDataStructer().randomAdd();
                            refresh();
                        }}/>

                    <RaisedButton label="重新开始" primary={true} className="btn" onTouchTap={ 
                        function(){
                            reBegin();
                        }}/>

                    <MyDialog label="帮助" title="二三树(Two Three Tree)" secondary={true} src="https://github.com/IACJ/react-datastructer/blob/master/src/tttree/TTTree.js">
                        <h4>"二三树"  是一类特殊的 B-Tree ,满足如下性质:</h4>
                        <p>(1)它的每个节点要么有2个孩子和1个数据元素，要么有3个孩子和2个数据元素，叶子节点没有孩子，并且有1个或2个数据元素。</p>
                        <p>(2)它的所有叶都在同一层上</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}
