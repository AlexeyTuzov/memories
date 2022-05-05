import { Box, Grid, Paper, Typography, Button, TextField } from '@mui/material';
import React, { FC } from 'react';

const AuthCard: FC = () => {
	return (
		<Grid container sx={{
			justifyContent: 'center'
		}}
		>
			<Grid item xs={12} sm={3}>
				<Paper sx={{
					minHeight: '30vh',
					marginTop: '50%'
				}}
				>
					<Box
						component='form'
						autoComplete='false'
						noValidate
						sx={{
							display: 'flex',
							justifyContent: 'center',
							margin: '5px'
						}}
					>
						<Typography variant='h6' component='header'>
							Welcome to memories App!
						</Typography>

					</Box>
				</Paper>
			</Grid>
		</Grid>
	)
}

export default AuthCard;