/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useContext, useEffect } from "react";
import userMsg from "../../Assets/user-msg.svg"
import pencilIcon from "../../Assets/pencil-icon.svg"
import msgSearchIcon from "../../Assets/msg-search-icon.svg"
import { styles } from "../../utils";
import msgCheck from "../../Assets/msg-check.svg"
import { contacts } from "../../constants/msg-contacts";
import { GlobalStateContext } from "../../context/globalContext";
export const MessagesLists = () => {
    const [activeContact, setActiveContact] = useState("")
    const { state, setState } = useContext(GlobalStateContext);
    const [contactLists, setContactLists] = useState(contacts)
    const makeActiveContact = (contact) => {
        setActiveContact(contact.id)
        setState((prevState) => ({
            ...prevState,
            selectedChatContact: contact,
        }));
    }

    useEffect(() => {
        makeActiveContact(contacts[0])
    }, [])

    const handleFilter = (e) => {
        var searchTerm = e.target.value;
        console.log(searchTerm)
        var renderValues = contacts.filter((item) =>
            Object.values(item).some((val) =>
                String(val).toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
        setContactLists(renderValues)

    }
    return (
        <div className="col-md-4 py-2 col-12">
            <div className="messages-lists px-3 py-3 font-inter">
                <div className="message-profile">
                    <div>
                        <div className="d-flex justify-content-between align-items-top">
                            <div>
                                <div className="d-flex align-items-center">
                                    <div><img src={userMsg} /></div>
                                    <div className="pl-2">
                                        <div className="text__sm--orange" style={{ fontWeight: 500 }}>David Peters</div>
                                        <div className="text__xs--dark" style={{ color: '#2E2E2E', fontWeight: 600 }}>Senior Developer</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <img src={pencilIcon} />
                            </div>

                        </div>
                        <div className="message-search my-4">
                            <div style={styles.inputContainer}>
                                <img src={msgSearchIcon} className="px-3 pb-3" style={styles.icon} />
                                <input type="text" className="input-msg-bar pt-2" placeholder="Search Here..." onChange={handleFilter} />
                            </div>
                        </div>
                        <div className="line-msg"></div>
                        <div className="msg-contact-lists pt-3 scrollable-msg-list">
                            <ul className="msg-scroll">
                                {contactLists?.map((contact) => {
                                    return (
                                        <li className={activeContact === contact?.id ? 'active-contact mb-4' : 'mb-4'} onClick={makeActiveContact.bind(this, contact)}>
                                            <div className="d-flex justify-content-between align-items-top">
                                                <div>
                                                    <div className="d-flex align-items-center">
                                                        <div><img src={contact?.image} /></div>
                                                        <div className="pl-2">
                                                            <div className="text__sm--orange" style={{ fontWeight: 500 }}>{contact.name}</div>
                                                            <div className="text__xs--dark" style={{ color: '#959595', fontWeight: 400, fontSize: '10px' }}>{contact.chats[0]?.outgoing[contact.chats[0]?.outgoing.length - 1]}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="text__xs--dark" style={{ color: '#959595', fontWeight: 400, fontSize: '10px' }}>
                                                    <div>{contact?.time}</div>
                                                    {contact?.count !== 0 &&
                                                        <div className="d-flex justify-content-end align-items-center">
                                                            {!contact.isCheck ?
                                                                <div className="count-msg">
                                                                    <div className="d-flex justify-content-center align-items-center h-100">
                                                                        <div>{contact.count}</div>
                                                                    </div>
                                                                </div> :
                                                                <div>
                                                                    <img src={msgCheck} /></div>}
                                                        </div>}

                                                </div>

                                            </div>

                                        </li>
                                    )
                                })}
                            </ul>

                        </div>
                        <div className="line-msg"></div>

                    </div>
                </div>
            </div>
        </div>


    );
};

