import React from 'react';
import { useDispatch } from 'react-redux';
import { connect } from 'react-redux'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import { addTodo, changeText, deleteTodo } from '../redux/action';

const mapStateToProps = (state) => ({
	todoList: [...state.todoList.todoList],
	input: state.todoList.input,
})

const TodoList = ({todoList, input}) => {
	const dispatch = useDispatch();
	const handleAddTodo = () => {
		dispatch(addTodo(input.title))
		dispatch(changeText(''))
	}

	const handleDeleteTodo = (e, value) => {
		dispatch(deleteTodo(value.id))
	}

	return (
		<>
			<FormControl variant="outlined" fullWidth>
				<InputLabel htmlFor="todoThing">輸入待辦事項</InputLabel>
				<OutlinedInput
					id="todoThing"
					value={input.title}
					onChange={e => dispatch(changeText(e.target.value))}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								onClick={handleAddTodo}
								// onMouseDown={handleMouseDownPassword}
								edge="end"
							>
								<AddIcon />
							</IconButton>
						</InputAdornment>
					}
					labelWidth={70}
				/>
			</FormControl>
			<List>
				{todoList.map(el => (
					<ListItem divider key={el.id}>
						<ListItemText
							primary={`${el.id}. ${el.title}`}
						/>
						<ListItemSecondaryAction>
							<IconButton edge="end" onClick={e => handleDeleteTodo(e, el)}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</>
	);
};


export default connect(
	mapStateToProps
)(TodoList);