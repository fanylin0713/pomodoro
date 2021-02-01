export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: {
            todo: todo,
        }
    }
}

export const deleteTodo = (index) => {
    return {
        type: 'DELETE_TODO',
        payload: {
            index: index,
        }
    }
}

export const changeText = (input) => {
    return {
        type: 'CHANGE_TEXT',
        payload: {
            input: input,
        }
    }
}

export const  setSelectedTodo = (todo) => {
    return {
        type: 'SET_SELECTED_TODO',
        payload: {
            todo: todo,
        }
    }
}

export const ADD_TODO = addTodo().type;
export const DELETE_TODO = deleteTodo().type;
export const CHANGE_TEXT = changeText().type;
export const SET_SELECTED_TODO = setSelectedTodo().type;