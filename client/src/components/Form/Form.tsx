import React, {FC} from 'react';
import useStyles from './styles';
import {Paper, Typography, TextField, Button} from '@mui/material';
import {Ipost} from '../../../../server/src/models/postMessage';
import UploadFile from 'rc-upload';

interface FormProps {
    handleSubmit: (e: React.FormEvent) => void,
    postData: Ipost,
    handleInput: (e: any) => void
}

const Form: FC<FormProps> = (props) => {

    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`}
                  onSubmit={props.handleSubmit}>
                <Typography variant='h6'>Create a Memory</Typography>
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
                    value={props.postData?.tags}
                    onChange={props.handleInput}
                />
                <div className={classes.fileInput}>
                    <UploadFile name='selectedFile'>
                        <Button>
                            Add Memory Image
                        </Button>
                    </UploadFile>
                </div>

                <Button variant='contained' color='primary' size='large' type='submit'
                        fullWidth>
                    Submit
                </Button>

                <Button variant='contained' color='secondary' size='small' fullWidth>
                    Clear
                </Button>


            </form>

        </Paper>
    );
}

export default Form;
