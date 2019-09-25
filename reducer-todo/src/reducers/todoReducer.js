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

export const todoReducer = (state, action) => {
    switch(action.type){
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

        default:
            return state;
    }        
};