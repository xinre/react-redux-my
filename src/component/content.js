import React, { Component } from 'react';
import Switch from './switch.js';
import PropTypes from 'prop-types';
import {connect} from '../reactRedux.js';

class Content extends Component {
    constructor () {
        super()
        this.state = { 
            themetext: '' 
        }
    }
    // componentWillMount () {
    //     console.log(this.props)
    //     const { store } = this.props;
    //     this._updateThemeColor()
    //     store.subscribe(() => this._updateThemeColor())
    //   }
    
    //   _updateThemeColor () {
    //     const { themetext } = this.props;
    //     this.setState({ themetext: themetext })
    //   }
    render() {
        return (
        <div>
            {this.props.themetext}
            <Switch/>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      themetext: state.text,
    }
  }

  Content=connect(mapStateToProps)(Content);

export default Content;