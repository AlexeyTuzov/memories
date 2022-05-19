import React, { FC } from 'react';
import { Google } from '@mui/icons-material';
import { Button } from '@mui/material';
import { GoogleApiProvider, useGoogleApi } from 'react-gapi';

const GoogleAuth: FC = () => {


    const onButtonClick = () => {
        gapi.load('client', () => {
            gapi.auth.signIn({
                clientid: '1011377274887-45p3iki7eonfi7ap9thsl7pchejcbfo7.apps.googleusercontent.com',
                cookiepolicy: 'single_host_origin'
            });
            console.log('token:', gapi.client.getToken());
        });
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