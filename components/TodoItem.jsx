import React, { PropTypes } from 'react';

export const todoItem = ({ text, checked, toggleTodo }) =>
  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={toggleTodo} />
      {text}
    </label>
  </div>
;

todoItem.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default todoItem;
