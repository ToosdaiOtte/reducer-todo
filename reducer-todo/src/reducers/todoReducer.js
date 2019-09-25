import TodoList from '../components/TodoList';

export const initialState = {
    todos: [
        {
            task: 'Learn Reducer Pattern',
            id: Date.now(),
            completed: false
        },
        {
            task: 'Redo React-Todo using Reducer Pattern',
            id: Date.now(),
            completed: false
        }
    ]
};

export const todoReducer = (state, action) => {
    switch(action.type){

        default:
            return state;
    }        
};