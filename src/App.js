import React, { Component } from 'react';
import Header from './component/header.js';
import Content from './component/content.js';
import {createStore,Provider} from './reactRedux.js';
import {themeReducer} from './reducer.js';
import PropTypes from 'prop-types';

const store = createStore(themeReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <Header/>
            <Content/>
        </div>
      </Provider>
    );
  }
}

export default App;
