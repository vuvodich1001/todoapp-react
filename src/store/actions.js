export const setTodo = (payload) => {
  return {
    type: 'set_todo',
    payload,
  };
};

export const addNewTodo = (payload) => {
  return {
    type: 'add_todo',
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: 'delete_todo',
    payload,
  };
};
