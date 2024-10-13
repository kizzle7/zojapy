/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { styles } from "../../utils";
import sendIcon from "../../Assets/send-icon.svg"
import mic from "../../Assets/mic.svg"
import attachIcon from "../../Assets/paperclip.svg"
import emojiIcon from "../../Assets/emoji.svg"
import cameraIcon from "../../Assets/camera.svg"
export const SendWidget = () => {
    return (
        <div className="send-widget-border">
            <div className="d-flex justify-content-between align-items-center">
                <div className="" style={{ width: '90%' }}>
                    <div style={styles.inputContainer}>
                        <img src={mic} className="px-3 pb-3" style={styles.icon} />
                        <input type="text" className="input-msg-send pt-2" placeholder="Write Something..." />
                        <div className="d-flex align-items-center" style={styles.iconright} >
                        <img src={attachIcon} className="px-2 pb-3" />
                        <img src={cameraIcon} className="px-2 pb-3" />
                        <img src={emojiIcon} className="px-2 pb-3" />
                        </div>
                       

                    </div>
                </div>
                <div>
                    <img src={sendIcon} ></img>
                </div>
            </div>
        </div>


    );
};

