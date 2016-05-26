export const toggleTodoAction = text => ({
  type: 'TOGGLE_TODO',
  text,
});

export const toggleTodoRemoteAction = text => ({
  withClient: client => dispatch =>
    client.authorizeToggleTodo(text).then(
      yesOrNo => {
        if (yesOrNo) {
          dispatch(toggleTodoAction(text));
        } else {
          dispatch(/* handle error case */);
        }
      }
    ),
});
