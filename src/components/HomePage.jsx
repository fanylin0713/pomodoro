import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import TodoList from './TodoList';

const HomePage = () => {
	return (
		<Box p={3}>
			<Grid container>
				<Grid item xs={6}>

				</Grid>
				<Grid item xs={6}>
					<TodoList />
				</Grid>
			</Grid>
		</Box>
	);
};

export default HomePage;
