import React, { useContext, useState } from "react";
import { Button } from "../Button/Index";
import { Text } from "../Texts/Index"
import sentMailIcon from "../../Assets/sent-email.svg"
import { GlobalStateContext } from "../../context/globalContext";
import { notification } from "antd";
import authService from "../../services/auth-service";
export const InitiateVerifyEmail = (props) => {
    const { state, setState } = useContext(GlobalStateContext);
    const [load, setLoad] = useState(false)
    const [disableBtn, setDisableBtn] = useState(false)

    const confirmEmail = () => {
        setState((prevState) => ({
            ...prevState,
            renderingScreen: 'show-verify',
        }));
    }

    const Notification = (type, msgType, msg) => {
        notification[type]({
            message: msgType,
            description: msg,
        });
    };

    const resendOtp = async () => {
        const data = {
            "email": state.onboardingEmail,
        };
        setLoad(true)
        try {
            const result = await authService.resendOtp(data);
            if (result) {
                setLoad(false);
                Notification("success", "Success", result?.message)
            }
        } catch (err) {
            setLoad(false);
            setDisableBtn(false)
        }
    }
    return (
        <div>
            <div className="mb-2 d-flex justify-content-center align-items-center">
                <img src={sentMailIcon} />
            </div>
            <div className="mb-3 text-center"><Text type="lead-text" text="Check your mailbox !" /></div>
            <div className="mb-3 ">
                <div className="">
                    <div className="d-flex justify-content-center align-items-center">
                        <div className="text__sm--dark text-center">
                            <div className="sent-mail-text">
                                We’ve sent an email to <span style={{ color: '#252C32' }}>{state?.onboardingEmail}</span> with a an OTP to confirm your account. Check your inbox to  activate your account.
                            </div>
                        </div>
                    </div>

                    <br />
                    <div className="pt-2 d-flex justify-content-center align-items-center">
                        <Button text="Confirm Email" className="amber-btn" onClick={confirmEmail} />
                    </div>
                    <br />
                    <div className="pt-3 d-flex justify-content-center">
                        <div className="pt-3 text__md--dark cursor">Didn’t get the mail? <span className="text__sm--orange" onClick={resendOtp}> {load ? 'Sending' : 'Resend'}</span></div>
                    </div>

                </div>
            </div>


        </div>
    );
};
