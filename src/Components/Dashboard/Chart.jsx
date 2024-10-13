/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import chartFrame from "../../Assets/chart-frame.svg"
export const Chart = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px", height: '348px' }}>
                    <div className="font-lexend">
                        <Text type="text-lead-dark" text="Overview" />
                        <img src={chartFrame} className="w-100" />
                    </div>
                </div>
            </div>


        </div>
    );
};

