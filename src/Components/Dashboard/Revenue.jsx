/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import instaIcon from "../../Assets/insta-dash.svg"
import fbIcon from "../../Assets/fb-dash.svg"
import linkedInIcon from "../../Assets/linkedin-dash.svg"
export const Revenue = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="font-lexend">
                        <Text type="text-lead-dark" text="Revenue" />
                    </div>
                    <div>
                        <div className="card py-2 px-3 mb-3" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                            <div className="d-flex justify-content-between align-items-center font-lexend">
                                <div>
                                    <div className="font-weight-bold" style={{ fontSize: '17px' }}>$4,000</div>
                                    <div className="text__xs--dark">Recently Added Pages</div>
                                </div>
                                <div>
                                    <img src={fbIcon} />
                                </div>
                            </div>
                        </div>
                        <div className="card py-2 px-3 mb-3" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                            <div className="d-flex justify-content-between align-items-center font-lexend">
                                <div>
                                    <div className="font-weight-bold" style={{ fontSize: '17px' }}>$4,000</div>
                                    <div className="text__xs--dark">Recently Added Pages</div>
                                </div>
                                <div>
                                    <img src={instaIcon} />
                                </div>
                            </div>
                        </div>
                        <div className="card py-2 px-3 mb-3" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                            <div className="d-flex justify-content-between align-items-center font-lexend">
                                <div>
                                    <div className="font-weight-bold" style={{ fontSize: '17px' }}>$4,000</div>
                                    <div className="text__xs--dark">Recently Added Pages</div>
                                </div>
                                <div>
                                    <img src={linkedInIcon} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

