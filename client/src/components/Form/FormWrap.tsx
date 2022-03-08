import React, {FC, useState} from 'react';
import Form from './Form';
import {Ipost} from '../../../../server/src/models/postMessage';

const FormWrap: FC = () => {

    const [postData, setPostData] = useState<Ipost>({
        creator: '',
        selectedFile: '',
        tags: '',
        message: '',
        title: ''
    });
    const postFields: string[] = Object.keys(postData);
    const handleSubmit = (e: React.FormEvent): void => {
        e.preventDefault();
    }
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input: string = e.target.value;
        const field: string | undefined = postFields.find(item => item === e.target.name);
        if (field) {
            setPostData({...postData, [field]: input});
        }
    }

    return (
        <Form handleSubmit={handleSubmit}
              postData={postData}
              handleInput={handleInput}/>
    )

}

export default FormWrap;
