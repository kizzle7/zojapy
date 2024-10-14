import React from "react";
import Logo from "../../Assets/buddy-logo.svg";
import Checkbox from "../../Assets/Checkbox.svg";
export const AuthContent = (props) => {
    return (
        <div className="col-md-6 col-12 web-ui">
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
    );
};
