import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";
import { initialState, todoReducer } from './reducers/todoReducer';

const App = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state);


  const clearCompleted = e => {
    e.preventDefault();
    setNewTodo({
      todos: state.todos.filter(task => !task.completed)
    });
  };


    return(
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm />
        </div>
        <TodoList
          state={state}
          clearCompleted={clearCompleted}
        />
      </div>
    );
  }

export default App;