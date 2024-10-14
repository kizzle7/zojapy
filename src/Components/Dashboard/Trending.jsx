/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Text } from "../Texts/Index";
import retweetIcon from "../../Assets/retweet.svg"
import msgIcon from "../../Assets/comment.svg"
import "./dashboard.css"
export const TrendingPosts = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card py-3 px-3" style={{ borderRadius: "16px" }}>
                    <div className="font-lexend">
                        <Text type="text-lead-dark" text="Trending Posts" />
                    </div>
                    <div className="py-1">
                        <div className="row">
                            <div className="col-md-6 col-12">
                                <div className="card px-3 py-3 font-lexend" style={{ borderRadius: '16px', border: '1px solid #F1F1F1' }}>
                                    <div className="text__lead--dark" style={{ fontSize: '16px', lineHeight: '24px' }}>
                                        8 Upcoming Influencer Marketing Trends and Benefits
                                    </div>
                                    <div className="text__xs--dark pt-2" style={{fontWeight:100}}>
                                        Marketing is evolving. It's changing from a one-way street to a two-way conversa…
                                    </div>
                                    <div className="pt-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icons-border mr-3">
                                                <div className="d-flex align-items-center">
                                                    <div>❤️</div>
                                                    <div style={{fontSize:'14px'}}>260</div>
                                                </div>
                                            </div>
                                            <div className="icons-border mr-3">
                                                <div className="d-flex align-items-center">
                                                    <div><img src={msgIcon} /></div>
                                                    <div  style={{fontSize:'14px'}} className="pl-1 pt-1">260</div>
                                                </div>
                                            </div>
                                            <div className="icons-border">
                                                <div className="d-flex align-items-center">
                                                    <div><img src={retweetIcon} /></div>
                                                    <div  style={{fontSize:'14px'}} className="pl-1 pt-1">260</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="card px-3 py-3 font-lexend" style={{ borderRadius: '16px', border: '1px solid #F1F1F1' }}>
                                    <div className="text__lead--dark" style={{ fontSize: '15px', lineHeight: '24px' }}>
                                        How Influencer Marketing Affects Consumer Buying Behavior
                                    </div>
                                    <div className="text__xs--dark pt-2" style={{fontWeight:100}}>
                                        As influencer marketing continues to grow, consumers have been turning to their…
                                    </div>
                                    <div className="pt-3">
                                        <div className="d-flex align-items-center">
                                            <div className="icons-border mr-3">
                                                <div className="d-flex align-items-center">
                                                    <div>❤️</div>
                                                    <div  style={{fontSize:'14px'}}>260</div>
                                                </div>
                                            </div>
                                            <div className="icons-border mr-3">
                                                <div className="d-flex align-items-center">
                                                    <div><img src={msgIcon} /></div>
                                                    <div  style={{fontSize:'14px'}} className="pl-1 pt-1">260</div>
                                                </div>
                                            </div>
                                            <div className="icons-border">
                                                <div className="d-flex align-items-center">
                                                    <div><img src={retweetIcon} /></div>
                                                    <div  style={{fontSize:'14px'}} className="pl-1 pt-1"> 260</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

