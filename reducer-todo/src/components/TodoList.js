// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {

    console.log(props.state);

    const toggleCompleted = id => 
        props.dispatch({ type: 'TOGGLE_COMPLETED', payload: id});
    

    return (
        <div className="todo-list">
            {props.state.map(task => (
                <Todo key={task.id} completed={task.completed} id={task.id} task={task.task} toggleCompleted={toggleCompleted}/>
            ))}
            <button className="clear-btn" >
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
