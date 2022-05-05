import React, { FC } from 'react';
import { AppBar, Container, Typography } from '@mui/material';
import memories from '../../assets/memories.png';

const Navbar: FC = () => {
    return (
        <AppBar sx={{ flexDirection: 'row', borderRadius: '15', margin: '30px 0', justifyContent: 'center', alignContent: 'center' }}
            position='static'
            color='inherit'>
            <Typography sx={{ color: 'rgba(0,183,255, 1)' }}
                variant='h2'
                align='center'>Memories
            </Typography>
            <Container sx={{ marginLeft: '15px' }}>
                <img src={memories} alt='Memories' height='60' />
            </Container>

        </AppBar>
    );
}

export default Navbar;