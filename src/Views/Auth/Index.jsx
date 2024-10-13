import React from 'react'
import { AuthWizard } from "../../Components/AuthWizard/auth-wizard"
//assets
import Logo from "../../Assets/buddy-logo.svg";
import Checkbox from "../../Assets/Checkbox.svg";
//external_style
import "./index.css";
function Index() {
    return (
        <div className="auth__bg">
            <div className="row">
                <div className="col-md-6 col-12">
                    <div className="auth__bg--white">
                        <div className="auth__container">
                            <div>
                                <img src={Logo} />
                            </div>
                            <div className="auth__pane">
                                <div className="auth-contents">
                                    <div>
                                        <div className="auth__contents">
                                            <div className="pt-3">
                                                <img src={Checkbox} />
                                            </div>
                                            <div className="auth__contents--text">Track real-time overview of company’s financial performance.</div>

                                        </div>
                                        <div className="auth__contents">
                                            <div className="pt-3">
                                                <img src={Checkbox} />
                                            </div>
                                            <div className="auth__contents--text">Track created projects budget against actual revenue and expenses.</div>

                                        </div>
                                        <div className="auth__contents">
                                            <div className="pt-3">
                                                <img src={Checkbox} />
                                            </div>
                                            <div className="auth__contents--text">Highlighted reports on budget deficit and surplus, accounting dimensions, balance sheets and real-time sales margin estimation.</div>

                                        </div>
                                    </div>

                                </div>
                                <br />
                                <br />
                                <br />
                                <div className="text__sm--dark">
                                    &copy;2022 Revvex. All rights reserved

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-12">
                    <div className="auth__bg--smoke">
                        <div className="auth-box">
                            <div className="auth-card">
                                <AuthWizard />

                            </div>
                            <button class="chat-button" onclick="initiateChat()">Get Help</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
