import React, { Component } from 'react';
import {connect} from '../reactRedux.js';

class Switch extends Component {
    handleSwitchtext (text) {
        this.props.dispatchText(text);
    }
    render() {
        return (
        <div>
            <button
            onClick={this.handleSwitchtext.bind(this, 'tang')}
            >tang</button>
            <button
            onClick={this.handleSwitchtext.bind(this, 'hong')}
            >hong</button>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      store: state,
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
        dispatchText:(text) => {
            dispatch({
                type:'CHANGE_TEXT',
                themetext:text
            })
        }
    }
}

Switch=connect(mapStateToProps,mapDispatchToProps)(Switch);

export default Switch;