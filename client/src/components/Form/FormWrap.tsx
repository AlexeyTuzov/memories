import React, { FC, useEffect, useState } from 'react';
import Form from './Form';
import { Ipost } from '../../../../server/src/models/postMessage';
import { useDispatch } from 'react-redux';
import { createNewPost, updatePost } from '../../redux/actions/posts';
import { useAppSelector } from '../../redux/redux-hooks';

const FormWrap: FC = () => {

    const dispatch = useDispatch();
    const blankPost: Ipost = {
        creator: '',
        selectedFile: '',
        tags: [],
        message: '',
        title: ''
    }

    const [postData, setPostData] = useState<Ipost>(blankPost);
    const postFields: string[] = Object.keys(postData);
    const currentID: string = useAppSelector(state => state.currentID);
    const selectedPost: Ipost | undefined = useAppSelector(
        state => state.posts.find(post => post._id === currentID)
    );

    useEffect(() => {
        if (selectedPost) {
            setPostData(selectedPost);
        }
    }, [currentID]);

    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        if (currentID) {
            dispatch(updatePost(postData, currentID));
        } else {
            dispatch(createNewPost(postData));
        }

    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const input: string = e.target.value;
        const field: string | undefined = postFields.find(item => item === e.target.name);
        if (field) {
            if (field === 'tags') {
                setPostData({ ...postData, tags: input.split(' ') });
            } else {
                setPostData({ ...postData, [field]: input });
            }

        }
    }
    const appendFile = (file: string): void => {
        setPostData({ ...postData, selectedFile: file });
    }
    const clearForm = () => {
        setPostData(blankPost);
    }

    return (
        <Form handleSubmit={handleSubmit}
            postData={postData}
            handleInput={handleInput}
            appendFile={appendFile}
            clearForm={clearForm}
            currentID={currentID} />
    )
}

export default FormWrap;
