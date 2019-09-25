import React, { useState, useReducer } from 'react';
import { initialState, todoReducer } from '../reducers/todoReducer';

const TodoForm = () =>  {
    const [newTodo, setNewTodo] = useState({ taskName: ''});
    const [state, dispatch] = useReducer({ todoReducer, initialState });

    // handleChanges = e => {
    //     setNewTodo({ taskName: e.target.value });
    //     console.log(taskName);
    // };
    const handleChanges = e => {
        setNewTodo({ taskName: e.target.value});
        console.log(newTodo);
      };

        return(
            <form>
                <input
                    type="text"
                    name="task"
                    value={state}
                    onChange={handleChanges}
                />
                <button onClick={() => dispatch({ type: 'ADD_TODO' })}>Add</button>
            </form>
        );
    }

export default TodoForm;