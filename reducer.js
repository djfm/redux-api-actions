const initialTodos = [
  { text: 'Observe user behaviour', checked: false },
  { text: 'Find interesting problem to solve', checked: false },
  { text: 'Come up with great solution', checked: false },
  { text: 'Ship it', checked: false },
];

export const todoReducer = (state = initialTodos, action) => {
  if (action.type === 'TOGGLE_TODO') {
    return state.map(item => ({
      text: item.text,
      checked: item.text === action.text ? !item.checked : item.checked,
    }));
  }

  return state;
};

export default todoReducer;
