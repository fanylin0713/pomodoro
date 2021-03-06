import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import TodoList from './TodoList';
import Clock from './Clock';

const HomePage = () => {
	return (
		<Box p={3} border={'2px solid #4F9D9D'} borderRadius="8px">
			<Grid container>
				<Grid item xs={6}>
					<Clock />
				</Grid>
				<Grid item xs={6}>
					<TodoList />
				</Grid>
			</Grid>
		</Box>
	);
};

export default HomePage;
