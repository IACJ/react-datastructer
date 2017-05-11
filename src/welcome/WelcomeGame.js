import React, {Component} from 'react';


class Welcome extends Component {
	render(){
		return (
      <div className='Welcome'>
        <h2> 数据结构在线模拟器 </h2>
        <p> <strong>游戏区</strong></p>
      <div >

        <div>
          <p>认为自己已熟练掌握数据结构？ 来体验富有<strong>挑战性</strong>的游戏区吧！</p>
          <p>无法忍受学习数据结构的痛苦？ 来体验富有<strong>趣味性</strong>的游戏区吧！ </p>
          <p>想要更加深入的理解数据结构？ 来体验富有<strong>启发性</strong>的游戏区吧！ </p>
        </div>

        <div>
          <h2> 本项目与数据结构游戏：</h2>
          <p>在本项目中，数据结构模块已开发好，视图模块也准备就绪。只需要更改少量的视图逻辑，一个有趣的游戏就会被创造。</p>
          <p>得益于本项目代码的清晰结构，每个js开发者都可以快速的理解项目代码并开发出新的趣味游戏。</p>
          <p>如何用10种数字填满一个5层的BST树？ 哪种出栈顺序不可能？二三树定点删除后的树形？ </p>
          <p>大开你的脑洞，迎战各种可能性！</p>
          
        </div>
      </div>
    </div>
    
    );
  }
}
export default Welcome;
