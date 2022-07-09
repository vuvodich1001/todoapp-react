import './App.css';
import { useStore, actions } from './store';
function App() {
  const [state, dispatch] = useStore();
  const { todos, todo } = state;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addNewTodo(1));
  };

  const deleteTodo = (index) => {
    console.log('click');
    dispatch(actions.deleteTodo(index));
  };
  return (
    <div className="App">
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={todo}
          onChange={(e) => dispatch(actions.setTodo(e.target.value))}
        />
        <button>Submit</button>
      </form>
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={index}>
              {todo}
              <button onClick={() => deleteTodo(index)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
