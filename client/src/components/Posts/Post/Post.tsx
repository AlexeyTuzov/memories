import React, { FC } from 'react';
import useStyles from './styles';
import moment from 'moment';
import { Ipost } from '../../../../../server/src/models/postMessage';
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@mui/material';
import { ThumbUpAlt, Delete, MoreHoriz } from '@mui/icons-material';
import { useDispatch } from 'react-redux';
import { updateCurrentID } from '../../../redux/actions/currentID';
import { deletePost } from '../../../redux/actions/posts';

interface PostProps {
    post: Ipost
}

const Post: FC<PostProps> = (props) => {

    const classes = useStyles();

    const dispatch = useDispatch();
    const updateID = (): void => {
        dispatch(updateCurrentID(props.post._id));
    }
    const deleteByID = (): void => {
            dispatch(deletePost(props.post._id));
    }

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image={props.post.selectedFile}
                title={props.post.title}
            />
            <div className={classes.overlay}>
                <Typography variant='h6'>
                    {props.post.creator}
                </Typography>
                <Typography variant='body2'>
                    {moment(props.post.createdAt).fromNow()}
                </Typography>
            </div>
            <div className={classes.overlay2}>
                <Button sx={{color: 'whitesmoke'}}
                 size='small'
                 onClick={updateID}>
                    <MoreHoriz fontSize='medium' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant='body2' color='textSecondary'>
                    {props.post.tags.map(tag => `#${tag} `)}
                </Typography>
            </div>
            <Typography className={classes.title} variant='subtitle1'>
                    {props.post.title}
                </Typography>
            <CardContent>
                <Typography variant='body1' gutterBottom>
                    {props.post.message}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size='small' color='primary'>
                    <ThumbUpAlt fontSize='small' />
                    Like
                    {props.post.likeCount}
                </Button>
                <Button size='small'
                 color='primary'
                 onClick={deleteByID}>
                    <Delete fontSize='small' />
                    Delete
                </Button>
            </CardActions>

        </Card>
    );
}

export default Post;
