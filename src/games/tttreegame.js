import React, {Component} from 'react';
import MainArea from '../tttree/MainArea';
import WaitingArea from '../tttree/WaitingArea';
import { getRefresher,getDataStructer,refresh,reBegin } from '../tttree/Control';
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
                    <font className="h2">趣味游戏--探索二三树 :</font>

                    {/*按钮列表*/}
                    <RaisedButton label="移除根节点左数据" primary={true} className="btn" onTouchTap={ 
                        function(){
                            console.log('调用removeTop函数: '+getDataStructer().remove(0));
                            refresh();
                            }}/>

                    <RaisedButton label="随机增重新开始" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            reBegin();
                        }}/>

                    <RaisedButton label="清空" primary={true} className="btn" onTouchTap={ 
                        function(){
                            reBegin(0);
                        }}/>

                    <MyDialog label="游戏规则/帮助" title="趣味游戏--探索二三树" secondary={true} src="https://github.com/IACJ/react-datastructer/blob/master/src/tttree/TTTree.js">
                        <h4>探索二三树</h4>
                        <p> ① 思考题：在BST中，与父节点一样大的点不会出现在左孩子中。在二三树中呢？为什么？</p>
                        <p> ② 计算题：三层的二三树共存储了多少个节点？比同高的BST多多少个？ 5层的呢？10层的呢？</p>
                        <p> ③ 尝试题：请通过增加或删除节点，感受二三树的节点的裂变、合并的规律。</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}
