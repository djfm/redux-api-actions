import React, { PropTypes } from 'react';
import { Link } from 'react-router';

export const todoItem = ({ text, checked, toggleTodo }) =>
  <div>
    <label>
      <input type="checkbox" checked={checked} onChange={toggleTodo} />
      {text} <Link to={`/${text}`}>edit</Link>
    </label>
  </div>
;

todoItem.propTypes = {
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  toggleTodo: PropTypes.func.isRequired,
};

export default todoItem;
