import React, { FC } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import Posts from '../../components/Posts/Posts';
import FormWrap from '../../components/Form/FormWrap';
import useStyles from '../../styles';
import Navbar from '../../components/Navbar/Navbar';


const Main: FC = () => {

    return (
        <Container maxWidth='lg'>
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

export default Main;