import React, {useState} from 'react';

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

const TodoList = () => {
	const [todoValue, setTodoValue] = useState('');

	const todoList = [
		{
			id: '1',
			name: 'eat'
		},
		{
			id: '2',
			name: 'sleep'
		},
		{
			id: '3',
			name: 'play'
		},
	];

	return (
		<>
			<FormControl variant="outlined" fullWidth>
				<InputLabel htmlFor="todoThing">輸入待辦事項</InputLabel>
				<OutlinedInput
					id="todoThing"
					value={todoValue}
					onChange={e=> setTodoValue(e.target.value)}
					endAdornment={
						<InputAdornment position="end">
							<IconButton
								// onClick={handleClickShowPassword}
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
							primary={`${el.id}. ${el.name}`}
						/>
						<ListItemSecondaryAction>
							<IconButton edge="end">
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default TodoList;

