import React, { useReducer, useState } from 'react';



const initialState = {
  todos: []
};


function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, completed: false }]
      };

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((_, index) => index !== action.index)
      };
    default:
      return state;
  }
}


function Todo() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [todoText, setTodoText] = useState('');


  const addTodo = () => {
    if (todoText) {
      dispatch({ type: 'ADD_TODO', payload: todoText });
      // setTodoText('');
    }
  }; 

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {state.todos.map((todo, index) => (
          <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}

            <button onClick={() => dispatch({ type: 'DELETE_TODO', index })}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;



