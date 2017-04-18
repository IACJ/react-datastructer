import React, {Component} from 'react';
import DrawerUndocked from '../common/DrawerUndocked';
import MyDialog from '../common/MyDialog';

class Welcome extends Component {
    render(){
        return (
        
        <div className='Welcome'>
            <h2> 欢迎使用 </h2>
            <h2> 数据结构模拟器 </h2>
        
            <p> <strong>快速开始 :</strong>
                请点击左上方的"打开导航栏" <br/>
                或 
            </p>
             <DrawerUndocked className="nomal" title="点击这里:快速开始" colored={true}/>
             <br/>
             <div >
                <div>
                    <MyDialog label="占位" title="" colored={false} >
                        <h4></h4>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                    </MyDialog>
                </div>
                <div>
                    <MyDialog label="占位" title="" >
                        <h4></h4>
                        <p> </p>
                        <p> </p>
                        <p> </p>
                    </MyDialog>
                </div>
                <div>
                    <MyDialog label="占位占位占位占位" title="BOOM!" >
                        {/*<p>本项目遵循MIT开源协议;</p>
                        <p>源代码于github网站上: </p>*/}
                        <p> </p>
                    </MyDialog>
                </div>
              </div>
        </div>
        
        );
    }
}
export default Welcome;
