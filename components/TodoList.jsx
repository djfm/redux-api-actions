import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem';
import { toggleTodoRemoteAction } from '../actions';

const allChecked = items => items.filter(item => !item.checked).length === 0;

export const todoList = ({ items, toggle }) =>
  <div>
    {items.map(item =>
      <TodoItem key={item.text} {...item} toggleTodo={() => toggle(item.text)} />
    )}
    <div>
      {allChecked(items) ? 'Congrats, you\'re rich!' : 'There\'s some more work to do.'}
    </div>
  </div>
;

todoList.propTypes = {
  items: PropTypes.array.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = items => ({ items });
const mapDispatchToProps = {
  toggle: toggleTodoRemoteAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(todoList);
