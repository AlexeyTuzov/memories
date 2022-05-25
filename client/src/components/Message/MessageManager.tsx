import React, { FC, useState, useEffect } from "react";
import MessagePopup from './MessagePopup';

interface MessageProps {
    messages: string[];
}
const MessageManager: FC<MessageProps> = (props) => {

    const [isPopupShown, setIsPopupShown] = useState<boolean>(false);

    const setPopupHidden = () => {
        setIsPopupShown(false);
    }

    useEffect( () => {
        if (props.messages.length > 0) {
            setIsPopupShown(true);
        }
    }, [props.messages]);

    return (
        <MessagePopup messages={props.messages} isPopupShown={isPopupShown} setPopupHidden={setPopupHidden}/>
    )
}

export default MessageManager;