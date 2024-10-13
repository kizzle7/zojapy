/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import greenCoin from "../../Assets/green-coin.svg"
import membersIcon from "../../Assets/new-members.svg"
import impressionIcon from "../../Assets/impressions.svg"
export const MetricsCounts = () => {
    return (
        <div className="row">
            <div className="col-md-4 col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="font-lexend text__count--dark">
                                51
                            </div>
                            <div className="font-lexend text__xs--dark">Total Channels</div>
                        </div>
                        <div>
                            <img src={greenCoin} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="font-lexend text__count--dark">
                                125
                            </div>
                            <div className="font-lexend text__xs--dark">New members</div>
                        </div>
                        <div>
                            <img src={membersIcon} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div>
                            <div className="font-lexend text__count--dark">
                                789
                            </div>
                            <div className="font-lexend text__xs--dark">All Impressions</div>
                        </div>
                        <div>
                            <img src={impressionIcon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

