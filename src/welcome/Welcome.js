import React, {Component} from 'react';
import DrawerUndocked from '../common/DrawerUndocked';
import MyDialog from '../common/MyDialog';

class Welcome extends Component {
	render(){
		return (
      <div className='Welcome'>
        <h2> 数据结构在线模拟器 </h2>
        <p> <strong>快速开始 :</strong>请点击左上方的"打开导航栏" <br/>或 </p>
        <DrawerUndocked className="nomal" title="点击这里:快速开始" colored={true}/><br/>
      <div >

        <div>
          <MyDialog label="使用说明" title="使用说明" primary={true} >
            <p>1. 点击左侧打开导航栏，点击任意数据结构进入其展示页面。</p>
            <p>2. 每个数据结构都有简短的帮助文档，点击“帮助”按钮则可查看。 </p>
            <p>3. 通过鼠标拖拽节点、点击按钮，可实现对数据结构的交互操作。 </p>
            <p>4. 用户可以直接查看数据结构源代码（在相应的帮助文档里)。 </p>
            <p>5. 提示：使用开发者模式的console窗口，可查看数据操作的log。 </p>
          </MyDialog>
        </div>

        <div>
          <MyDialog label="产品简介" title="产品简介" primary={true}>
            <h3>产品定位：教育、交互、快速查阅、体验式学习。</h3>
            <p> 一个使用react实现的“数据结构在线模拟器”。</p>
            <p> 用户可以通过电脑访问该网站，并进行数据结构的模拟操作。</p>
            <p> 用户可以直接查看数据结构源代码(JS版本)</p>
            <p> 可用于：帮助学生自学、辅助老师授课、程序员快速查阅。</p>
          </MyDialog>
        </div>

        <div>
          <MyDialog label="关于此项目" title="关于此项目" primary={true}>
            <p> 创作者：ACJ、wty、CC、TruePhone</p>
            <p> 此产品是主要以“方便大家直观地学习数据结构”为目的而创造的。</p>
            <p> 我们也倾注了一番热情和精力，尽管存在一些瑕疵，仍希望得到大家的支持和鼓励。</p>
            <p> 仍存在的两点瑕疵：</p>
            <p> 1. 数据结构页面需要足够的宽度。用户需要用电脑访问本项目，浏览器窗口宽度不够则会导致移位。</p>
            <p> 2. 暂不支持手机端。其实问题2说到底还是问题1，手机屏幕的宽度不足以展示主区域画布，所以本项目暂时不支持手机端。</p>
            <p> 也欢迎大家为我们贡献代码，本项目代码已在GitHub开源:</p>
            <p><a  href="https://github.com/IACJ/react-datastructer"  title="GitHub地址">https://github.com/IACJ/react-datastructer</a>  </p>
          </MyDialog>
        </div>

      </div>
    </div>
    
    );
  }
}
export default Welcome;
