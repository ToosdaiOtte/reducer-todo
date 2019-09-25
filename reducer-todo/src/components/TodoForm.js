import React from 'react';
// import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoForm = props =>  {
    console.log(props.state);

    const handleChanges = e => {
        props.setNewTodo(e.target.value);
        console.log(props.newTodo);
      };


        return(
            <form>
                <input
                    type="text"
                    name="props.newTodo"
                    value={props.newTodo}
                    onChange={handleChanges}
                />
                <button onClick={e => {
                    e.preventDefault();
                    props.dispatch({ type: 'ADD_TODO', payload: props.newTodo })
                }}>
                    Add
                </button>
            </form>
        );
    }

export default TodoForm;