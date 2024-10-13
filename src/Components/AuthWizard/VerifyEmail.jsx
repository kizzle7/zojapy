import React, { useState, useContext } from "react";
import { Text } from "../Texts/Index"
import { Button } from "../Button/Index";
import OtpInput from "react-otp-input";
import { GlobalStateContext } from "../../context/globalContext";
import authService from "../../services/auth-service";
import { notification } from "antd";
export const VerifyEmail = (props) => {
    const [otp, setOtp] = useState("")
    const handleChangePin = (otp) => setOtp(otp);
    const [disableBtn, setDisableBtn] = useState(false)
    const [load, setLoad] = useState(false)
    const { state, setState } = useContext(GlobalStateContext);

    const Notification = (type, msgType, msg) => {
        notification[type]({
            message: msgType,
            description: msg,
        });
    };

    const confirmOtp = async () => {
        const data = {
            "otp": otp
        };
        setLoad(true)
        setDisableBtn(true)
        try {
            const result = await authService.verfyOtp(data);
            if (result) {
                setLoad(false);
                Notification("success", "Success", result?.message)
                setTimeout(() => {
                    setState((prevState) => ({
                        ...prevState,
                        renderingScreen: 'show-success',
                    }));
                }, 1200)
            }
        } catch (err) {
            setLoad(false);
            setDisableBtn(false)
            Notification("error", "Error", err?.response?.data?.message);
        }

    }
    return (
        <div>
            <div><Text type="lead-text" text="Verify your email" /></div>
            <div className="text__sm--dark ">A four digit OTP code has been sent to your email <span className="text__sm--orange">{state?.onboardingEmail}</span></div>
            <br />
            <div className="">
                <OtpInput
                    value={otp}
                    onChange={handleChangePin}
                    isInputNum
                    isInputSecure={false}
                    inputStyle={{
                        padding: "15px",
                        border: "1px solid #FF8600",
                        borderRadius: '10px',
                        fontSize: '25px',
                        fontWeight: 700,
                        lineHeight: '24px',
                        color: '#5B6871',
                        letterSpacing: "-1.1%",
                        textAlign: 'center',
                        outline: 'none',
                        width: "57px",
                        height: '57px',
                        marginTop: "10px",
                        marginLeft: "0px",
                        marginRight: "30px",
                        marginBottom: "7px"
                    }}
                    numInputs={4}
                    separator={<span></span>}
                />

                <br />
                <div className="pt-2">
                    <Button text="Confirm code" isDisabled={disableBtn} onClick={confirmOtp} loading={load} className="amber-btn" />
                </div>
                <br />
                <div className="">
                    <div className="pt-3 text__md--dark">Didn’t get the mail? <span className="text__sm--orange"> Resend</span></div>
                </div>

            </div>

        </div>
    );
};
