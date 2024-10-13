/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import growthIcon from "../../Assets/growth.svg"
import { members } from "../../constants/members";
export const PotentialMembers = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="font-lexend">
                        <Text type="text-lead-dark" text="Potential Members" />
                    </div>
                    <div className="py-1">
                        <div className="d-flex align-items-center">
                            {members?.map((member) => {
                                return (
                                    <div className="card mr-2" style={{ border: '1px solid #F1F1F1', borderRadius: '12px' }}>
                                        <div className="text-center font-lexend">
                                            <div className="px-3 py-2">
                                                <div>
                                                    <img src={member.img} />
                                                </div>
                                                <div>
                                                    <div className="font-weight-bold" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>{member?.name}</div>
                                                </div>
                                                <div>
                                                    <div className="text__xs--dark" style={{ fontWeight: 300 }}>{member?.handle}</div>
                                                </div>
                                                <div className="pt-1 font-weight-bold">
                                                    <div className="d-flex align-items-center">
                                                        <div>
                                                            <img src={growthIcon} />
                                                        </div>
                                                        <div className="pl-2">{member?.percent}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

