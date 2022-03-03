import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './assets/memories.png';

function App() {
  return (
    <Container maxWidth='lg'>
        <AppBar>
            <Typography variant='h2' align='center'>Memories</Typography>
            <img src={memories} alt='Memories' height='60'/>
        </AppBar>
    </Container>
  );
}

export default App;
