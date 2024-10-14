/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Layout } from "../../Components/DashboardContainer/Index";
import { MessagesLists } from "../../Components/Messages/MessageLists"
import { MessageContent } from "../../Components/Messages/MessageContent"
import "./index.css"
const Messages = () => {
    return (
        <div>
            <Layout title="Messages">
                <div className="">
                    <div className="row">
                        <div className="col-12">
                            <div className="card py-4 px-3 h-100" style={{ borderRadius: '12px', height: '100vh' }}>
                                <div className="row">
                                    <MessagesLists />
                                    <MessageContent />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Layout>
        </div>
    );
};

export default Messages;
