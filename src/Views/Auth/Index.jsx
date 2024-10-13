import React from 'react'
import { AuthWizard } from "../../Components/AuthWizard/auth-wizard"
import { AuthContent } from "../../Components/AuthWizard/AuthContents"
import chatIcon from "../../Assets/bi_chat.svg"
import "./index.css";
function Index() {
    return (
        <div className="auth__bg">
            <div className="row">
                <AuthContent />
                <div className="col-md-6 col-12">
                    <div className="auth__bg--smoke">
                        <div className="auth-box">
                            <div className="auth-card">
                                <AuthWizard />
                            </div>
                            <br />
                            <div className='d-flex justify-content-end align-items-center'>
                                <button class="chat-button" >
                                    <div className='d-flex align-items-center'>
                                        <div className='pr-3'>Get Help</div>
                                        <div><img src={chatIcon} /></div>
                                    </div>
                                </button>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
