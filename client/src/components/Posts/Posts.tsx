import React, { FC, useState } from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useAppSelector } from '../../redux/redux-hooks';
import { CircularProgress, Grid } from '@mui/material';
import { Ipost } from '../../../../server/src/models/postMessage';

const Posts: FC = () => {

    const classes = useStyles();
    const posts: Ipost[] = useAppSelector((state) => state.posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.mainContainer} container alignItems='stretch' spacing={3}>
                {posts.map((post: Ipost) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post}/>
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;
