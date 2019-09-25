import React from 'react';

import "./Todo.css";

const Todo = props => {

    return (
        // div showing returning todo.task, if/else switching className from '' to taskcompleted if todo.completed === true,
        // passing toggleCompleted prop from TodoList.js passing todo.id as arg to check 
        <div
            className={`task${props.completed === true ? "completed" : ""}`}
            onClick={() =>
                props.toggleCompleted(props.id)
            }
        >
            <p>{props.task}</p>
        </div>
    );
};
export default Todo;