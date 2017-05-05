import React, {Component} from 'react';
import MainArea from '../bst/MainArea';
import WaitingArea from '../bst/WaitingArea';
import { getRefresher,getDataStructer,refresh,reBegin } from '../bst/Control';
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
                    <font className="h2">趣味游戏--填充BST:</font>

                    {/*按钮列表*/}
                    <RaisedButton label="移除根节点" primary={true} className="btn" onTouchTap={ 
                        function(){
                            
                            console.log('调用delete(0)函数: ');
                            getDataStructer().delete(0);
                            refresh();
                            }}/>

                    <RaisedButton label="随机重新开始" primary={true} className="btn" onTouchTap={ 
                        function(){ 
                            reBegin();               

                        }}/>

                    <RaisedButton label="清空" primary={true} className="btn" onTouchTap={ 
                        function(){
                             reBegin(0); 
                        }}/>

                    <MyDialog label="游戏规则/帮助" title="趣味游戏：填充BST" secondary={true} src="https://github.com/IACJ/react-datastructer/blob/master/src/bst/BST.js">
                        <h4>二叉搜索树(BST)  </h4>
                        <p> ① 小试牛刀：将0~9这10个数字全部填进BST中。</p>
                        <p> ② 挑战任务：用0~9这10个数字将一个5层高的BST填满。</p>
                        <p> ③ 思考题：用何种策略填充，才使得0~9这10个数字尽量多地填充进BST中？</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}
