import React, { PropTypes } from 'react';

export const todoItem = ({ text, checked, toggleTodo }) =>
  <label>
    <input type="checkbox" checked={checked} onChange={toggleTodo} />
    {text}
  </label>
;

todoItem.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default todoItem;
