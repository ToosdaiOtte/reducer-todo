import React from 'react';

// TodoForm component with props
const TodoForm = props =>  {
    console.log(props.state);

    // handleChange event to update newTodo with input value
    const handleChanges = e => {
        props.setNewTodo(e.target.value);
        console.log(props.newTodo);
      };
        // JSX
        return(
            <form>
                {/* Passed newTodo from App.js useState() as the value, handling setNewTodo useState with handleChanges function */}
                <input
                    type="text"
                    name="props.newTodo"
                    value={props.newTodo}
                    onChange={handleChanges}
                />
                {/* Add Todo button, prevent window reload default, run dispatch 'ADD_TODO' to add newTodo to state */}
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