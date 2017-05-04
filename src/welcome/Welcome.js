import React, {Component} from 'react';
import DrawerUndocked from '../common/DrawerUndocked';
import MyDialog from '../common/MyDialog';

class Welcome extends Component {
    render(){
        return (
        
        <div className='Welcome'>
            <h2> 数据结构在线模拟器 </h2>
        
            <p> <strong>快速开始 :</strong>
                请点击左上方的"打开导航栏" <br/>
                或 
            </p>
             <DrawerUndocked className="nomal" title="点击这里:快速开始" colored={true}/>
             <br/>
             <div >
                <div>
                    <MyDialog label="使用说明" title="使用说明" colored={false} >
                        <p>1. 点击左侧打开导航栏，点击任意数据结构进入其展示页面</p>
                        <p>2. 每个数据结构都有简短的帮助文档，点击“帮助”按钮则可查看 </p>
                        <p>3. 通过鼠标拖拽节点、点击按钮，可实现对数据结构的交互操作 </p>
                        <p>4. 提示：打开开发者模式的console窗口，则可查看数据操作的log </p>
                    </MyDialog>
                </div>
                <div>
                    <MyDialog label="产品简介" title="产品简介" >
                        <h4>产品定位：教育、交互、快速查阅、体验式学习</h4>
                        <p> 一个使用react实现的“数据结构在线模拟器”。</p>
                        <p> 用户可以通过电脑访问该网站，并进行数据结构的模拟操作。</p>
                        <p> 可用于：帮助学生自学、辅助老师授课、程序员快速查阅</p>
                    </MyDialog>
                </div>
                <div>
                    <MyDialog label="关于此项目" title="关于此项目" >
                        <p> 创作者：ACJ、wty、CC、TruePhone</p>
                        <p> 此产品是主要为了“方便大家直观地学习数据结构”而创造的，倾注了一番热情和精力，尽管存在一些瑕疵，仍希望得到大家的支持和鼓励</p>
                        <p> 仍存在一些瑕疵：</p>
                        <p> 1. 数据结构需要很大一块区域去展示，需要用电脑打开并用浏览器全屏去看，宽度不够则会错位</p>
                        <p> 2. 不支持手机端。 其实问题2说到底还是问题1，手机的宽度不足以展示主区域，所以暂时无法使用手机模拟</p>
                        <p> 也欢迎大家为我们贡献代码，本项目代码已在GitHub开源: https://github.com/IACJ/react-datastructer </p>
                    </MyDialog>
                </div>
              </div>
        </div>
        
        );
    }
}
export default Welcome;
