import React, {FC} from 'react';
import { Ipost } from '../../../../../server/src/models/postMessage';
import {Card, CardActions, CardMedia, CardContent, Button, Typography} from '@mui/material';
import {ThumbUpAlt, Delete, MoreHoriz} from '@mui/icons-material';

interface PostProps {
    post: Ipost
}

const Post: FC<PostProps> = (props) => {
    return (
        <div>
            <h1>
                POST
            </h1>

        </div>
    );
}

export default Post;
