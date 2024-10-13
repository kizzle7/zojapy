/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import Fuel from "../../Assets/fuel.svg"
import Elon from "../../Assets/elon.svg"
import Russia from "../../Assets/russia.svg"
export const NewsTrend = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="font-lexend">
                        <Text type="text-lead-dark" text="Trending News" />
                    </div>
                    <div>
                        <div className="card py-2 px-2 mb-3" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                            <div className="d-flex align-items-center font-lexend">
                                <div><img src={Russia} /> </div>
                                <div className="pl-2">
                                    <div className="font-weight-bold" style={{fontSize:'14px'}}>Russia & Ukraine War</div>
                                    <div className="text__xs--dark" style={{ fontWeight: 300 }}>Marketing is evolving. It's chang...</div>
                                </div>

                            </div>
                        </div>
                        <div className="card py-2 px-2 mb-3" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                            <div className="d-flex align-items-center font-lexend">
                                <div><img src={Elon} /> </div>
                                <div className="pl-2">
                                    <div className="font-weight-bold" style={{fontSize:'14px'}}>Elon Musk bought Twitter</div>
                                    <div className="text__xs--dark" style={{ fontWeight: 300 }}>Twitter is the most useful social pl...</div>
                                </div>

                            </div>
                        </div>
                        <div className="card py-2 px-2 mb-3" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                            <div className="d-flex align-items-center font-lexend">
                                <div><img src={Fuel} /> </div>
                                <div className="pl-2">
                                    <div className="font-weight-bold" style={{fontSize:'14px'}}>Fuel Crisis Everywhere</div>
                                    <div className="text__xs--dark" style={{ fontWeight: 300 }}>Due to covid situation in 2020 the...</div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </div>
    );
};

