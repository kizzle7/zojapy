/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext } from "react";
import { styles } from "../../utils";
import sendIcon from "../../Assets/send-icon.svg"
import mic from "../../Assets/mic.svg"
import attachIcon from "../../Assets/paperclip.svg"
import emojiIcon from "../../Assets/emoji.svg"
import cameraIcon from "../../Assets/camera.svg"
import { GlobalStateContext } from "../../context/globalContext";
import { contacts } from "../../constants/msg-contacts";
export const SendWidget = () => {
    const { state, setState } = useContext(GlobalStateContext);
    const [msg, setMsg] = useState("")
    const sendOutgoingMsg = () => {
        if (msg) {
            let objIndex = contacts.findIndex((obj) => obj.id == state.selectedChatContact?.id);
            var getUserChats = contacts[objIndex].chats;
            getUserChats[0]?.outgoing?.push(msg)
            var refreshContactInfo = contacts?.find((contact) => contact?.id === state.selectedChatContact?.id)
            setMsg("")
            setState((prevState) => ({
                ...prevState,
                selectedChatContact: refreshContactInfo,
            }));
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendOutgoingMsg();
        }
    };
    return (
        <div className="send-widget-border">
            <div className="d-flex justify-content-between align-items-center">
                <div className="" style={{ width: '90%' }}>
                    <div style={styles.inputContainer}>
                        <img src={mic} className="px-3 pb-3" style={styles.icon} />
                        <input type="text" className="input-msg-send pt-2" onChange={(e) => {
                            setMsg(e.target.value)

                        }} onKeyDown={handleKeyDown}
                            placeholder="Write Something..." value={msg} />
                        <div className="d-flex align-items-center" style={styles.iconright} >
                            <img src={attachIcon} className="px-2 pb-3" />
                            <img src={cameraIcon} className="px-2 pb-3" />
                            <img src={emojiIcon} className="px-2 pb-3" />
                        </div>
                    </div>
                </div>
                <div onClick={sendOutgoingMsg}>
                    <img src={sendIcon} ></img>
                </div>
            </div>
        </div>


    );
};

