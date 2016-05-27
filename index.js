import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import reducer from './reducer';
import { browserHistory, Router, Route } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import TodoList from './components/TodoList';

const store = createStore(combineReducers({
  items: reducer,
  routing: routerReducer,
}), undefined, window.devToolsExtension && window.devToolsExtension());

const history = syncHistoryWithStore(browserHistory, store);

const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoList} />
    </Router>
  </Provider>
;

render(<App />, document.getElementById('mount'));
