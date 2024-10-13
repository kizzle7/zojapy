/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, useRef } from "react";
import { DashboardContainer } from "../../Components/DashboardContainer/Index";
import users from "../../Assets/users.svg";
import UsersList from "../../Components/Tables/Users/usersList";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import userService from "../../services/user-service";
import { Loader } from "../../Components/Loading/index";
import moment from "moment";
const Dashboard = () => {
  const [usersCount, setUsersCount] = useState({});
  const [load, setLoad] = useState(false);
  const [loadCounts, setLoadCounts] = useState(false);
  const [usersList, setUsersList] = useState([]);
  const isMounted = useRef(false);
  const getUsersCount = async () => {
    setLoadCounts(true);
    try {
      const result = await userService.usersCount();
      if (result) {
        setLoadCounts(false);
        setUsersCount(result);
      }
    } catch (err) {
      setLoadCounts(false);
    }
  };

  const getUsersList = async () => {
    setLoad(true);
    try {
      const result = await userService.usersList();
      if (result) {
        let index = 0;
        setLoad(false);
        result.data.users?.forEach((order) => {
          order.index = ++index;
          order.dateRegistered = moment(order.date).format(
            "DD-MMM-YYYY h:mm A"
          );
        });
        setUsersList(result.data);
      }
    } catch (err) {
      setLoad(false);
    }
  };

  useEffect(() => {
    if (!isMounted.current) {
      // Your code here
      getUsersCount();
      getUsersList();
      isMounted.current = true;
    }
  }, []);

  console.log(usersList);
  return (
    <div>
      <DashboardContainer title="Users">
        {load && <Loader />}
        {!load && (
          <div className="container pt-2">
            <div className="row">
              <div className="col-md-3">
                <div
                  className="card py-3 px-3"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="pr-1">
                        <img src={users} />
                      </div>
                      <div>Total Users</div>
                    </div>
                    <h4 className="font-weight-bold">
                      {usersCount?.totalUsers}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card py-3 px-3"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="pr-1">
                        <img src={users} />
                      </div>
                      <div>Active Users </div>
                    </div>
                    <h4 className="font-weight-bold">
                      {usersCount?.activeUsers}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card py-3 px-3"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="pr-1">
                        <img src={users} />
                      </div>
                      <div>Suspended Users </div>
                    </div>
                    <h4 className="font-weight-bold">
                      {usersCount?.suspendedUsers}
                    </h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div
                  className="card py-3 px-3"
                  style={{ borderRadius: "10px" }}
                >
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="pr-1">
                        <img src={users} />
                      </div>
                      <div>Deleted Users </div>
                    </div>
                    <h4 className="font-weight-bold">
                      {usersCount?.deletedUsers}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <Tabs
                defaultTab="basic"
                onChange={(tabId) => {
                  console.log(tabId);
                }}
              >
                <TabList>
                  <Tab tabFor="basic">Basic Users</Tab>
                  <Tab tabFor="personal">Personal</Tab>
                  <Tab tabFor="business">Business</Tab>
                  <Tab tabFor="agency">Agency</Tab>
                </TabList>
                <TabPanel tabId="basic">
                  <div className="pt-4">
                    <UsersList data={usersList?.users} />
                  </div>
                </TabPanel>
                <TabPanel tabId="personal">
                  <div className="pt-4">
                    <UsersList data={usersList?.users} />
                  </div>
                </TabPanel>
                <TabPanel tabId="business">
                  <div className="pt-4">
                    <UsersList data={usersList?.users} />
                  </div>
                </TabPanel>
                <TabPanel tabId="agency">
                  <div>agency now</div>
                  <div className="pt-4">
                    <UsersList data={usersList?.users} />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        )}
      </DashboardContainer>
    </div>
  );
};

export default Dashboard;
