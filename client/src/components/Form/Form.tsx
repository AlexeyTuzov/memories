import React, { FC } from 'react';
import useStyles from './styles';
import { Paper, Typography, TextField, Button } from '@mui/material';
import { Ipost } from '../../../../server/src/models/postMessage';
import FileBase64 from 'react-file-base64';

interface FormProps {
    handleSubmit: (e: React.FormEvent) => void;
    postData: Ipost;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    appendFile: (file: string) => void;
    clearForm: () => void;
    currentID: string;
}

const Form: FC<FormProps> = (props) => {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off'
                  noValidate
                  className={`${classes.root} ${classes.form}`}
                  onSubmit={props.handleSubmit}>
                <Typography variant='h6'>
                    {props.currentID ? `Editing ${props.postData.title}` : `Creating a memory`}
                </Typography>
                <TextField
                    variant='outlined'
                    name='creator'
                    label='Creator'
                    fullWidth
                    value={props.postData?.creator}
                    onChange={props.handleInput}
                />
                <TextField
                    variant='outlined'
                    name='title'
                    label='Title'
                    fullWidth
                    value={props.postData?.title}
                    onChange={props.handleInput}
                />
                <TextField
                    variant='outlined'
                    name='message'
                    label='Message'
                    fullWidth
                    value={props.postData?.message}
                    onChange={props.handleInput}
                />
                <TextField
                    variant='outlined'
                    name='tags'
                    label='Tags'
                    fullWidth
                    value={props.postData?.tags.toString().replace(',', ' ')}
                    onChange={props.handleInput}
                />
                <div className={classes.fileInput}>
                    <FileBase64 multiple={false}
                                type='file'
                                onDone={({ base64 }: any) => props.appendFile(base64)}
                    >
                    </FileBase64>
                </div>

                <Button
                    variant='contained'
                    color='primary'
                    size='large'
                    type='submit'
                    fullWidth
                >
                    Submit
                </Button>

                <Button
                    variant='contained'
                    color='secondary'
                    size='small'
                    fullWidth
                    onClick={props.clearForm}
                >
                    Clear
                </Button>

            </form>

        </Paper>
    );
}

export default Form;
