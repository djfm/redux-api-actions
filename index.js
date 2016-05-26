import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import TodoList from './components/TodoList';

const initialTodos = [
  { text: 'Observe user behaviour', checked: false },
  { text: 'Find interesting problem to solve', checked: false },
  { text: 'Come up with great solution', checked: false },
  { text: 'Ship it', checked: false },
];

const todoReducer = (state = initialTodos, action) => {
  if (action.type === 'TOGGLE_TODO') {
    return state.map(item => ({
      text: item.text,
      checked: item.text === action.text ? !item.checked : item.checked,
    }));
  }

  return state;
};

const store = createStore(todoReducer);

render(<Provider store={store}><TodoList /></Provider>, document.getElementById('mount'));
