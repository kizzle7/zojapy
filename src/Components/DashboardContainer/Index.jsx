import React from "react";
import "./index.css";
import Sidebar from "./Sidebar"
import { styles } from "../../utils";
import searchIncon from "../../Assets/search-bar.svg"
import PlusIcon from "../../Assets/bx-plus.svg"
import bellIcon from "../../Assets/bell.svg"
export const Layout = ({ children, title }) => {

  if (!localStorage?.getItem('user-token')) {
    window.location = "/"
  }
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <div className="head-layout">
          <div>
            <div className="header-title">{title}</div>
          </div>
          <div>
            <div className="d-flex justify-content align-items-center">
              <div className="pr-4">
                <div style={styles.inputContainer}>
                  <img src={searchIncon} className="px-3 pb-3" style={styles.icon} />
                  <input type="text" className="input-head-bar pt-3" placeholder="Search" />
                </div>
              </div>
              <div className="pr-4">
                <div className="circle-white">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                      <img src={PlusIcon} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="circle-white">
                  <div className="d-flex justify-content-center align-items-center h-100">
                    <div>
                      <img src={bellIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />

        <main className="content h-100">
          {children}
        </main>
      </div>
    </div>
  );
};

