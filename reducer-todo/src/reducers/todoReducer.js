// Export initialState with todo array
export const initialState = {
    todos: [
        {
            task: 'Learn Reducer Pattern',
            id: 1001,
            completed: false
        },
        {
            task: 'Redo React-Todo using Reducer Pattern',
            id: 1002,
            completed: false
        },
    ]
};


// Export todoReducer with switch cases for action.type
export const todoReducer = (state, action) => {
    switch(action.type){
        // ADD_TODO case adding new todo item to array
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos,
                    {
                        task: action.payload,
                        id: new Date(),
                        completed: false
                    }
                ]        
            }
        // TOGGLE_COMPLETED case mapping through todo items for their individual ids, to switch their completed status to the opposite of what it is set to
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: 
                    state.todos.map(todo => {
                        if(todo.id === action.payload){
                            return {
                                ...todo, 
                                completed: !todo.completed
                            }
                            } else {
                                return todo;
                            }
                        }
                    )
            }
        // CLEAR_COMPLETED case filtering through todo items to keep the items with a completed status of false
        case 'CLEAR_COMPLETED':
            return {
                ...state,
                todos:
                    state.todos.filter(todo => 
                        todo.completed === false
                    )
            }
        default:
            return state;
    }        
};