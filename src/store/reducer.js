const initState = {
  todos: [],
  todo: '',
};

function reducer(state, action) {
  let newState;
  switch (action.type) {
    case 'set_todo':
      newState = {
        ...state,
        todo: action.payload,
      };
      break;
    case 'add_todo':
      newState = {
        todos: [...state.todos, state.todo],
        todo: '',
      };
      break;
    case 'delete_todo':
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
      newState = { ...state };
      console.log(action.payload, newState);
      break;
    default:
      break;
  }
  return newState;
}
export { initState };
export default reducer;
