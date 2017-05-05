import React, {Component} from 'react';
import Lines from './TTLines';

class TTNode extends Component {

  render() {
      let {children,id} = this.props;

      let style={
            backgroundColor: '#99FFAA',
            width: '104px',
            marginLeft: '0.1rem',
            marginRight: '0.1rem',
            position:'relative',
            display: 'flex',
            flexDirection: 'row'
        }
        if (id<4 && id>=1){
            style.marginLeft= '6.7rem';
            style.marginRight= '6.7rem';
        }
 
      return (
          <div style={style}>
              {children}
              {(children ===null)?null:<Lines id={this.props.id}/>}
          </div>
      );
    }
}
export default TTNode;