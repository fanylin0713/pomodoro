import { ADD_TODO, DELETE_TODO, CHANGE_TEXT } from '../action';

const initialState = {
	todoList: [
		{
			id: 1,
			title: 'study English'
		},
		{
			id: 2,
			title: 'read a book'
		},
	],
	input: {
		title: '',
	}
}

function todoList(state = initialState, action) {
	switch (action.type) {
		case ADD_TODO:
			let newTodoList = state.todoList;
			const length = newTodoList.length;
			newTodoList.push({
				id: length + 1,
				title: action.payload.todo,
			});
			return {
				...state,
				todoList: newTodoList,
			}
			case DELETE_TODO: {
				let newTodoList = state.todoList;
				newTodoList.splice(action.payload.index - 1, 1);
				for (var i = 0; i < newTodoList.length; i++) {
					newTodoList[i].id = i + 1;
				}
				return {
					...state,
					todoList: newTodoList,
				}
			}
			case CHANGE_TEXT:
				return {
					...state,
					input: {
						title: action.payload.input,
					}
				}
				default:
					return state;
	}
}

export default todoList