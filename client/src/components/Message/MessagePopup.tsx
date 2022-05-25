import React, { FC, useState, useEffect } from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    Slide
} from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';

interface MessageProps {
    messages: string[];
    isPopupShown: boolean;
    setPopupHidden: () => void;
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
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
        props.setPopupHidden();
    };

    return (
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
            >
                <DialogTitle>Input incorrect!</DialogTitle>
                <DialogContent>
                    {props.messages.map(item =>
                        <DialogContentText key={item}>{item}</DialogContentText>)}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>OK</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default MessagePopup;
