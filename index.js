import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { browserHistory, Router, Route } from 'react-router';
import { reducer as formReducer } from 'redux-form';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import reducer from './reducer';
import TodoList from './components/TodoList';
import TodoItemForm from './components/TodoItemForm';

const store = createStore(combineReducers({
  items: reducer,
  routing: routerReducer,
  form: formReducer,
}), undefined, window.devToolsExtension && window.devToolsExtension());

const history = syncHistoryWithStore(browserHistory, store);

const App = () =>
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={TodoList} />
      <Route path="/:text" component={TodoItemForm} />
    </Router>
  </Provider>
;

render(<App />, document.getElementById('mount'));
