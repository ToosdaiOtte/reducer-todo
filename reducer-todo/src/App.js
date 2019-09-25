// Import React, useState, and useReducer
import React, { useState, useReducer } from 'react';
// Import Todo components
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";
// Import Reducer
import { initialState, todoReducer } from './reducers/todoReducer';

const App = () => {
  // Set useState for newTodo(setNewTodo) item to update
  const [newTodo, setNewTodo] = useState();
// initialize state and dispatch with useReducer, pass in todoReducer, initialState (todoReducer must be first otherwise will throw error)
  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state.todos);

  // App with Todo components and necessary props passed.
    return(
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm 
            state={state.todos} 
            dispatch={dispatch} 
            newTodo={newTodo}
            setNewTodo={setNewTodo}
          />
        </div>
        <TodoList
          state={state.todos}
          dispatch={dispatch}
        />
      </div>
    );
  }

export default App;