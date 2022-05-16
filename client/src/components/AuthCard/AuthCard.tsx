import { Box, Grid, Paper, Typography, Button, TextField, Avatar, Container } from '@mui/material';
import { LockOutlined } from '@mui/icons-material';
import React, { FC, useState } from 'react';
import { IUser } from '../../../../server/src/models/user';
import Input from './Input';
import { userInputs } from './AuthWrap';

interface AuthCardProps {
    handleSubmit: (e: React.FormEvent) => void;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    userData: IUser;
    confirmPassword: string;
}

const AuthCard: FC<AuthCardProps> = (props) => {

    const [isSignIn, setIsSignIn] = useState<boolean>(false);

    const switchSignMode = () => {
        setIsSignIn(prevSignState => !prevSignState);
    }

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
                    <LockOutlined />
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
                            handleInput={props.handleInput} />

                        <Input value={props.userData.userLastName}
                            half
                            name={userInputs.userLastName}
                            label='LastName'
                            type='text'
                            handleInput={props.handleInput} />

                        <Input value={props.userData.userEmail}
                            name={userInputs.userEmail}
                            label='Email'
                            type='email'
                            handleInput={props.handleInput} />

                        <Input value={props.userData.userPassword}
                            name={userInputs.userPassword}
                            label='Password'
                            type='password'
                            handleInput={props.handleInput} />
                        <Input value={props.confirmPassword}
                            name={userInputs.userConfirmPassword}
                            label='Confirm password'
                            type='password'
                            handleInput={props.handleInput} />
                        <Grid item xs={12}>
                            <Button fullWidth color='primary' type='submit' variant='contained'>
                                Submit
                            </Button>
                        </Grid>
                        <Grid container justifyContent='flex-end' margin='5px'>
                            <Grid item>
                                <Button onClick={switchSignMode}>
                                    {isSignIn ? 'Don\'t have an account? Sign Up!' : 'Already have an account? Sign In!'}
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>

                </Box>
            </Paper>

        </Container>
    )
}

export default AuthCard;
