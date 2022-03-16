import React, { FC, useState } from 'react';
import Form from './Form';
import { Ipost } from '../../../../server/src/models/postMessage';
import { useDispatch } from 'react-redux';
import { createNewPost } from '../../redux/actions/posts';

const FormWrap: FC = () => {

    const dispatch = useDispatch();
    const blankPost: Ipost = {
        creator: '',
        selectedFile: '',
        tags: '',
        message: '',
        title: ''
    }

    const [postData, setPostData] = useState<Ipost>(blankPost);
    const postFields: string[] = Object.keys(postData);
    
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
        dispatch(createNewPost(postData));
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const input: string = e.target.value;
        const field: string | undefined = postFields.find(item => item === e.target.name);
        if (field) {
            setPostData({ ...postData, [field]: input });
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
            clearForm={clearForm} />
    )
}

export default FormWrap;
