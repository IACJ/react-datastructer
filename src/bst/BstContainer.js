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
                    <font className="h2">二叉搜索树(BST):</font>

                    {/*按钮列表*/}
                    <RaisedButton label="移除根节点" primary={true} className="btn" onTouchTap={ 
                        function(){
                            
                            console.log('调用delete(0)函数: ');
                            getDataStructer().delete(0);
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

                    <MyDialog label="帮助" title="二叉搜索树(BST)" secondary={true} >
                        <h4>"二叉搜索树(BST)"  是一类特殊的数据结构,满足如下性质:</h4>
                        <p> ① 若它的左子树非空，则左子树上所有结点的值均小于根结点的值；</p>
                        <p> ② 若它的右子树非空，则右子树上所有结点的值均大于根结点的值；</p>
                        <p> ③ 左、右子树本身又各是一棵二叉排序树。</p>
                        <p> 请通过“拖拽”或“点击按钮”进行操作</p>
                        <p>(提示：打开console查看数据结构操作的log)</p>
                    </MyDialog>

                </div>
            <MainArea fuck={this.state}/>
            <WaitingArea />
        </div>);
    }
}
