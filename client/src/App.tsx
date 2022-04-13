import React, { FC } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import memories from './assets/memories.png';
import Posts from './components/Posts/Posts';
import FormWrap from './components/Form/FormWrap';
import useStyles from './styles';


const App: FC = () => {

    const classes = useStyles();

    return (
        <Container maxWidth='lg'>
            <AppBar sx={{ flexDirection: 'row' }}
                className={classes.appBar}
                position='static'
                color='inherit'>
                <Typography className={classes.heading}
                    variant='h2'
                    align='center'>Memories
                </Typography>
                <img className={classes.image} src={memories} alt='Memories' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container
                        alignItems='stretch'
                        spacing={3}
                        sx={{ flexDirection: { xs: 'column-reverse', sm: 'row' } }}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <FormWrap />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    );
}

export default App;
