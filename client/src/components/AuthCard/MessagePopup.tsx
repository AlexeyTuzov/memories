import React, { FC, useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Slide,
    Typography
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface MessageProps {
    errors: string[];
    isPopupShown: boolean;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} children={props.children} />;
});

const MessagePopup: FC<MessageProps> = (props) => {

    const [open, setOpen] = useState<boolean>(false);

    useEffect(() => {
        if (props.isPopupShown) {
            setOpen(true);
        }
    }, [props.isPopupShown]);

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Input incorrect!</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.errors}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MessagePopup;
