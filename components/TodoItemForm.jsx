import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import { Field, reduxForm } from 'redux-form';

export class TodoItemForm extends Component {
  render() {
    return (
      <form>
        <label>
          {'Text: '}<br />
          <Field name="text" component="textarea" type="text" /><br />
        </label>
        <Link to="/">{'<< Back'}</Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'todo',
})(TodoItemForm);
