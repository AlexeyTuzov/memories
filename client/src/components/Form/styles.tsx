import {makeStyles} from '@mui/styles';

const useStyles = makeStyles(() => ({
        root: {
            '& .MuiTextField-root': {
                margin: 5
            },
            '& .MuiButton-root': {
                margin: 5
            }
        },
        paper: {
            padding: 5
        },
        form: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center'
        },
        fileInput: {
            width: '97%',
            margin: '10px 0'
        }

    })
    )
;

export default useStyles;
