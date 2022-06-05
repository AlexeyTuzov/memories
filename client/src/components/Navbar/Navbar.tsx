import React, { FC } from 'react';
import { AppBar, Container, Typography } from '@mui/material';
import memories from '../../assets/memories.png';
import { Logout } from '@mui/icons-material';
import { Button } from '@mui/material';

interface NavbarProps {
    logoutHandler: () => void;
}

const Navbar: FC<NavbarProps> = (props) => {
    return (
        <Container>
            <AppBar sx={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: '15px',
                margin: '30px 0',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: 'lg'
            }}
                position='static'
                color='inherit'>
                <Typography sx={{
                    color: 'rgba(0,183,255, 1)',
                    marginRight: '15px'
                }}
                    variant='h2'
                >Memories
                </Typography>
                <img src={memories} alt='Memories' height='60' />
                <Button onClick={props.logoutHandler}>
                    <Logout />
                </Button>

            </AppBar>
        </Container>

    );
}

export default Navbar;
