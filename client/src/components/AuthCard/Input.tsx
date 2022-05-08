import React, { FC, useState } from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface InputProps {
    half?: boolean,
    name: string,
    label: string,
    value: string,
    type: string,
    handleInput: (e: any) => void
}

const Input: FC<InputProps> = (props) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handlePasswordVisibility = () => {
        setIsPasswordVisible( prev => !prev);
    }

    return (
        <Grid item xs={12} sm={props.half ? 6 : 12}>
            <TextField
                variant='outlined'
                name={props.name}
                required
                fullWidth
                type={ props.type === 'password' && !isPasswordVisible ? 'text' : props.type }
                label={props.label}
                value={props.value}
                onChange={props.handleInput}
                InputProps={
                    props.name === 'userPassword' ?
                        {
                            endAdornment: (<InputAdornment position='end'>
                                <IconButton onClick={handlePasswordVisibility}>
                                    {isPasswordVisible ? <Visibility/> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>)
                        } : undefined
                }
            >
            </TextField>
        </Grid>
    );
}

export default Input;
