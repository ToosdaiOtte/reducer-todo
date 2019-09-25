import React from 'react';

import "./Todo.css";

const Todo = props => {

    return (
        <div
            className={`task${props.task.completed === true ? "completed" : ""}`}
        >
            <p>{props.task}</p>
        </div>
    );
};
export default Todo;