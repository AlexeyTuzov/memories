import { Box, Grid, Paper, Typography, Button, TextField, Avatar, Container } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import React, { FC } from 'react';
import { IUser } from '../../../../server/src/models/user';
import Input from './Input';
import { userInputs } from './AuthWrap';

interface AuthCardProps {
    handleSubmit: (e: React.FormEvent) => void;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userData: IUser;
}

const AuthCard: FC<AuthCardProps> = (props) => {

    return (
        <Container
            component='main'
            maxWidth='sm'
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >


            <Paper sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
            >
                <Avatar sx={{ margin: '2px', bgcolor: 'primary.main' }}>
                    <LockOutlined/>
                </Avatar>
                <Box
                    component='form'
                    autoComplete='false'
                    noValidate
                    onSubmit={props.handleSubmit}
                    sx={{

                        alignContent: 'center',
                        margin: '5px'
                    }}
                >
                    <Grid container spacing={2} >
                        <Input value={props.userData.userFirstName}
                               half
                               name={userInputs.userFirstName}
                               label='FirstName'
                               type='text'
                               handleInput={props.handleInput}/>

                        <Input value={props.userData.userLastName}
                               half
                               name={userInputs.userLastName}
                               label='LastName'
                               type='text'
                               handleInput={props.handleInput}/>

                        <Input value={props.userData.userEmail}
                               name={userInputs.userEmail}
                               label='Email'
                               type='email'
                               handleInput={props.handleInput}/>

                        <Input value={props.userData.userPassword}
                               name={userInputs.userPassword}
                               label='Password'
                               type='password'
                               handleInput={props.handleInput}/>
                    </Grid>

                </Box>
            </Paper>

        </Container>
    )
}

export default AuthCard;
