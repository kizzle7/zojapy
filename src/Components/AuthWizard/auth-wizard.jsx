import React, { useState, useContext } from "react";
import { Index } from "./Index"
import { EmailVerifySuccess } from "./EmailSuccess";
import { Register } from "./Register";
import { InitiateVerifyEmail } from "./InitiateVerifyEmail";
import { VerifyEmail } from "./VerifyEmail";
import { Login } from "./Login"
import { GlobalStateContext } from "../../context/globalContext";
import "./wizard.css"
export const AuthWizard = (props) => {
    const { state, setState } = useContext(GlobalStateContext);
    const renderComponent = () => {
        switch (state.renderingScreen) {
            case 'show-index':
                return <Index />;
            case 'show-register':
                return <Register />;
            case 'show-initiate-verify--email':
                return <InitiateVerifyEmail />;
            case 'show-verify':
                return <VerifyEmail />;
            case 'show-success':
                return <EmailVerifySuccess />;
            case 'show-login':
                return <Login />;
            default:
                return <Index />;
        }
    }
    return (
        <div>
            {renderComponent()}
        </div>
    );
};
