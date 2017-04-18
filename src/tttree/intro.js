import React, {Component} from 'react';


export default  class Intro extends Component {

    render(){ 

        let style = {
          border: '1px dashed gray',
          borderRadius : '900px',
          height: '50px',
          width: '50px',
          backgroundColor: 'red',
        };

        return (
            <div style={ style }>
                <p >
                    intro
                </p>
            </div>
        );
    }
}