/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import msgSearchIcon from "../../Assets/msg-search.svg"
import msgLikeIcon from "../../Assets/msg-like.svg"
import msgBellIcon from "../../Assets/msg-bell.svg"
import user from "../../Assets/user-msg.svg"
import { SendWidget } from "./SendMsgWidget"
import { GlobalStateContext } from "../../context/globalContext";
export const MessageContent = () => {
    const { state, setState } = useContext(GlobalStateContext);
    console.log(state.selectedChatContact)
    return (
        <div className="col-md-8 py-2 col-12">
            <div className="message-content">
                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <div className="d-flex align-items-center">
                            <div><img src={state?.selectedChatContact?.image} /></div>
                            <div className="pl-2">{state?.selectedChatContact?.name}</div>
                        </div>
                    </div>
                    <div>
                        <div className="d-flex align-items-center">
                            <div className="pr-3">
                                <img src={msgSearchIcon} />
                            </div>
                            <div className="pr-3">
                                <img src={msgLikeIcon} />

                            </div>
                            <div>
                                <img src={msgBellIcon} />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="py-3">
                    <div className="line-msg-content"></div>
                </div>
                <div className="msg-body py-3">
                    <div className="msg-tile pb-3">
                        <div className="">
                            <div className="d-flex justify-content-start">
                                {state.selectedChatContact?.chats?.map((chat) => {
                                    return (
                                        <div>
                                            {chat?.incoming?.map((chat) => {
                                                return (
                                                    <div className="d-flex align-items-end">
                                                        <div className="mr-2"><img src={state?.selectedChatContact?.image} width={20} /></div>
                                                        <div className="msg-textin-border mb-2">
                                                            <div className="msg-text-in">
                                                                {chat}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}

                                        </div>

                                    )
                                })}

                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="d-flex justify-content-end">
                                {state?.selectedChatContact?.chats?.map((chat) => {
                                    return (
                                        <div>
                                            {chat?.outgoing?.map((chat) => {
                                                return (
                                                    <div className="d-flex align-items-end">
                                                        <div className="msg-textout-border mb-2">
                                                            <div className="msg-text-out">
                                                                {chat}
                                                            </div>
                                                        </div>
                                                        <div className="ml-2"><img src={user} width={20} /></div>

                                                    </div>
                                                )
                                            })}

                                        </div>
                                    )
                                })}

                            </div>
                        </div>
                        <div className="pt-3">
                            <div className="d-flex align-items-center">
                                <div className="line-msg-content"></div>
                                <div className="px-3" style={{ color: '#D9D9D9', fontWeight: 300 }}>Today</div>
                                <div className="line-msg-content"></div>

                            </div>
                        </div>
                    </div>


                </div>
                <SendWidget />
            </div>
        </div>

    );
};

