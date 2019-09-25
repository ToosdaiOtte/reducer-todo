// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    console.log(props.state);
    return (
        <div className="todo-list">
            {props.state.map(task => (
                <Todo key={task.id} completed={task.completed} task={task.task} />
            ))}
            <button className="clear-btn" >
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
