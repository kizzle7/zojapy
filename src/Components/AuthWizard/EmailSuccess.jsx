import React, { useContext } from "react";
import { Button } from "../Button/Index";
import { Text } from "../Texts/Index"
import mailSuccessIcon from "../../Assets/mail-success.svg"
import { GlobalStateContext } from "../../context/globalContext";
import { useHistory } from 'react-router-dom'
export const EmailVerifySuccess = (props) => {
    const history = useHistory()
    const { state, setState } = useContext(GlobalStateContext);
    const proceedToDashboard = () => {
        history.push('/my-portfolio')
    }
    return (
        <div>
            <div className="mb-2 d-flex justify-content-center align-items-center">
                <img src={mailSuccessIcon} />
            </div>
            <br />
            <div className="mb-3 text-center"><Text type="lead-text" text="Email Verified !" /></div>
            <div className="mb-3 ">
                <div className="">
                    <div className=" ">
                        <div className="text__sm--dark text-center">
                            The verified email address will be associated   with                      </div>
                        <div className="text__sm--dark text-center"> your account. Click on the button below to continue    </div>
                    </div>

                    <br />
                    <div className="pt-2 d-flex justify-content-center align-items-center">
                        <Button text="Continue" className="amber-btn" onClick={proceedToDashboard} />
                    </div>
                </div>
            </div>


        </div>
    );
};
