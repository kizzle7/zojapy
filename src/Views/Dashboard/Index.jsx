/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Layout } from "../../Components/DashboardContainer/Index";
import { MetricsCounts } from "../../Components/Dashboard/Counts"
import { Charts } from "../../Components/Dashboard/Chart"
import { TrendingPosts } from "../../Components/Dashboard/Trending"
import { PotentialMembers } from "../../Components/Dashboard/PotentialMembers"
import { Watchlist } from "../../Components/Dashboard/Watchlist"
import { Revenue } from "../../Components/Dashboard/Revenue"
import { NewsTrend } from "../../Components/Dashboard/News"
import "./Index.css"
const Dashboard = () => {
  return (
    <div>
      <Layout title="My Portfolio">
        <div className="pt-2">
          <div className="row">
            <div className="col-md-8 col-12">
              <MetricsCounts />
              <div className="pt-3">
                <Charts />
              </div>
              <div className="pt-3">
                <TrendingPosts />
              </div>
              <div className="pt-3">
                <PotentialMembers />
              </div>
            </div>
            <div className="col-md-4 col-12">
              <Watchlist />
              <div className="pt-3">
                <Revenue />
              </div>
              <div className="pt-3">
                <NewsTrend />
              </div>
            </div>

          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Dashboard;
