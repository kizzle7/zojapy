/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import stock1 from "../../Assets/Stocks1.svg"
import stock2 from "../../Assets/Stocks2.svg"
export const Watchlist = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="font-lexend">
                            <Text type="text-lead-dark" text="Watchlist" />
                        </div>
                        <div className="font-lexend font-weight-bold" >
                            <Text text="VIEW ALL" type="text-xs-orange" />
                        </div>
                    </div>
                    <div className="">
                        <div>
                            <img src={stock1} className="w-100" />
                        </div>
                        <div className="pt-3">
                            <img src={stock2} className="w-100" />
                        </div>
                    </div>

                </div>
            </div>


        </div>
    );
};

