import React, { Component } from 'react';
import PropTypes from 'prop-types';

function createStore (reducer) {
    let state = null
    const listeners = []
    const subscribe = (listener) => listeners.push(listener)
    const getState = () => state
    const dispatch = (action) => {
      state = reducer(state, action)
      listeners.forEach((listener) => listener())
    }
    dispatch({}) // 初始化 state
    return { getState, dispatch, subscribe }
  }

  const connect = (mapStateToProps,mapDispatchToProps) => (WrappedComponent) => {
    class Connect extends Component {
      static contextTypes = {
        store: PropTypes.object
      }
      constructor () {
        super()
        this.state = { allProps: {} }
      }
  
      componentWillMount () {
        const { store } = this.context
        this._updateProps()
        store.subscribe(() => this._updateProps())
      }
  
      _updateProps () {
        const { store } = this.context
        let stateProps = mapStateToProps?mapStateToProps(store.getState()):{};
        let dispatchProps = mapDispatchToProps?mapDispatchToProps(store.dispatch):{};
        this.setState({
          allProps: { 
            ...stateProps,
            ...dispatchProps,
            ...this.props
          }
        })
      }
  
      render () {
        return <WrappedComponent {...this.state.allProps} />
      }
    }
  
    return Connect
  }

  class Provider extends Component {
    static childContextTypes = {
      store: PropTypes.object
    }
  
    getChildContext () {
      return {
        store: this.props.store
      }
    }
  
    render () {
      return (
        <div>{this.props.children}</div>
      )
    }
  }

  export {createStore,connect,Provider};