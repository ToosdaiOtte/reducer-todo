import React, { useState, useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";
import { initialState, todoReducer } from './reducers/todoReducer';

const App = () => {
  const [newTodo, setNewTodo] = useState();

  const [state, dispatch] = useReducer(todoReducer, initialState);
  console.log(state.todos);

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