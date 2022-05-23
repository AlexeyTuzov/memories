import React, { FC } from 'react';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { GoogleApiProvider, useGoogleApi } from 'react-gapi';

const GoogleAuth: FC = () => {


    const onButtonClick = () => {
        
    }

    return (

        <Button
            variant='contained'
            color='primary'
            fullWidth
            onClick={onButtonClick}
            startIcon={<Google />}>
            Google Log In
        </Button>

    );
}

export default GoogleAuth;