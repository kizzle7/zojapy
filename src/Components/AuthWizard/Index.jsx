import React, { useContext } from "react";
import emailBox from "../../Assets/email.svg"
import { Text } from "../Texts/Index"
import GoogleIcon from "../../Assets/gg_google.svg"
import { GlobalStateContext } from "../../context/globalContext";
export const Index = () => {
    const { state, setState } = useContext(GlobalStateContext);
    const renderRegistrationScreen = () => {
        setState((prevState) => ({
            ...prevState,
            renderingScreen: 'show-register',
        }));
    }

    const loginRender = () => {
        setState((prevState) => ({
            ...prevState,
            renderingScreen: 'show-login',
        }));
    }
    return (
        <div>
            <div className="mb-4"><Text type="lead-text" text="Register your account" /></div>
            <div className="mb-3 pt-3">
                <div className="auth__box--signupborder" onClick={renderRegistrationScreen}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="signupborder--contents ">
                            <div className="">
                                <img src={emailBox} />
                            </div>
                            <div className="pl-2">Sign up with email
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <div className="mb-3">
                <div className="d-flex align-items-center">
                    <div className="border-divider"></div>
                    <div className="px-3">or</div>
                    <div className="border-divider"></div>

                </div>
            </div>
            <div className="mb-3">
                <div className="auth__box--signupborder" onClick={renderRegistrationScreen}>
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="signupborder--contents ">
                            <div className="">
                                <img src={GoogleIcon} />
                            </div>
                            <div className="pl-2">Sign up with email
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <br />
            <div className="text__sm--dark pt-2" >By clicking the button above, you agree to our <span className="text__sm--orange cursor">Terms of Service </span>and <span className="text__sm--orange cursor">Privacy Policy.</span> </div>
            <br />
            <br />
            
            <div className="pt-3 text__md--dark cursor">Already have an account? <span className="text__sm--orange cursor" onClick={loginRender}>Login</span></div>
        </div>
    );
};
