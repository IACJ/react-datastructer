import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import '../common/common.css';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog by clicking outside the dialog, or with the 'Esc' key.
 */
export default class MyDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleNewWindow =() => {
    window.open (this.props.src);  
  }

  render() {
    const {primary,secondary,src} = this.props;
    const actions = [
        src? 
        <FlatButton
        label="查看该数据结构源代码(JS版)"
        secondary={true}
        onTouchTap={this.handleNewWindow}
      /> : null,
      <FlatButton  
        label="太长不看..."
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="了解"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.handleClose}
      />,
    ];

    return (
      <div style={{display:'inline'} }>
        <RaisedButton label={this.props.label} className='btn'  primary={primary} secondary={secondary} onTouchTap={this.handleOpen} />
        <Dialog
          title={this.props.title}
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.props.children}
        </Dialog>
      </div>
    );
  }
}