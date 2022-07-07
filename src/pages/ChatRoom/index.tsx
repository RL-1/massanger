import React, {useEffect, useState} from 'react'
//@ts-ignore
import styles from './styles.module.css'
import {useParams} from "react-router-dom";
import useChat from "../../lib/hook/useChat";
import SendIcon from '@mui/icons-material/Send';

interface messageType {
    body: string
    ownedByCurrentUser: boolean
    senderId: number
}
export const ChatRoom: React.FC = () => {
    const roomID = useParams()
    const { messages, sendMessage } = useChat(Object.values(roomID)[0]);
    const [newMessage, setNewMessage] = useState("");
    const handleNewMessageChange = (event: any) => {
        setNewMessage(event.target.value);
    };
    console.log(messages)
    const handleSendMessage = () => {
        if(newMessage.length){
            sendMessage(newMessage);
            setNewMessage("");
        }
    };
    const handlEnterPress = (e: any) => {
        if(e.keyCode == 13){
            handleSendMessage()
        }
    }

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.chat}>
                    {messages.map((item: messageType) => {
                        return(
                            <div
                                className={styles.message}
                                style={{
                                    flexDirection: item.ownedByCurrentUser ? 'row-reverse' : 'inherit'
                                }}
                            >
                                <div className={item.ownedByCurrentUser ?
                                    styles.owner : styles.companion
                                }>
                                    <div className={styles.message__content}>
                                        <div className={styles.text}>
                                            {item.body}
                                        </div>
                                        <div className={styles.time}>
                                            15:55
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <form className={styles.sent__message}>
                    <input
                        value={newMessage}
                        onChange={handleNewMessageChange}
                        placeholder="Напишите сообщение"
                        className={styles.input}
                    />
                    <div className={styles.button__sent} onClick={handleSendMessage} >
                        <SendIcon />
                    </div>
                </form>
            </div>
        </div>
    )
}