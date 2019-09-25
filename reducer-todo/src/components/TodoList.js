import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    // Checking to make sure state is connected to TodoList correctly
    console.log(props.state);
    // Function running dispatch 'TOGGLE_COMPLETED' action
    const toggleCompleted = id => 
        props.dispatch({ type: 'TOGGLE_COMPLETED', payload: id});
    // Function running dispatch 'CLEAR_COMPLETED' action
    const clearCompleted = () => 
        props.dispatch({ type: 'CLEAR_COMPLETED'});
    
    // JSX
    return (
        <div className="todo-list">
            {/* Map through each state.todo and return a <Todo /> component for each one with the necessary props passed */}
            {props.state.map(task => (
                <Todo key={task.id} completed={task.completed} id={task.id} task={task.task} toggleCompleted={toggleCompleted}/>
            ))}
            {/* Clear Completed button running clearCompleted function when clicked */}
            <button 
                className="clear-btn"
                onClick={() => clearCompleted()}
            >
                Clear Completed
            </button>
        </div>
    );
};

export default TodoList;
