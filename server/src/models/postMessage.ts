import { Schema, model } from 'mongoose';

interface Ipost {
    title: string;
    message: string;
    creator: string;
    tags: string;
    selectedFile: string;
    likeCount: number;
    createdAt: Date;
}

const postSchema = new Schema<Ipost>( {
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const PostMessage = model('Post', postSchema);

export default PostMessage;