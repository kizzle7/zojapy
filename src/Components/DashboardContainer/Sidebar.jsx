/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./index.css";
import { Link, useHistory, useLocation } from "react-router-dom";
import menu from "../../constants/sidebars";
import Logo from "../../Assets/buddy-logo.svg"
import logoutIcon from "../../Assets/Logout.svg"
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const history =  useHistory()

  const locationPath = useLocation();
  const currentLocation = locationPath.pathname.replace("/", "");

  const toggle = () => setIsOpen(!isOpen);

  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    history.push('/')
  };


  return (
    <aside className="sidebar" style={{ overflowY: "scroll", height: "100vh" }}>
      <div className="d-flex justify-content-center pt-4">
        <img src={Logo} />
      </div>
      <ul class="list-unstyled container">
        {menu.map((men) => {
          return (
            <li style={{ whiteSpace: "nowrap" }}>
              <div
                className={`${currentLocation === men.path ? "active-li" : "inactive-li"
                  }`}
              >
                <Link
                  to={"/" + men.path}
                  className="pl-1"
                  style={{
                    textDecoration: "none",
                    color: currentLocation === men.path ? "#FF8600" : "#818187",
                  }}
                >
                  <img src={currentLocation === men.path ? men?.activeIcon : men?.icon} style={{ paddingRight: ".4rem" }} />
                  {men.name}{" "}
                </Link>{" "}
              </div>
            </li>
          );
        })}{" "}
      </ul>{" "}
      <div className="card px-3 font-lexend py-2 text-center" style={{ borderRadius: '16px' }}>
        <div className="text__lead--dark" style={{ fontSize: '14px' }}>{localStorage?.getItem('f_name') + " " + localStorage?.getItem('l_name')}</div>
        <div className="text__xs--dark" style={{ fontWeight: 300 }}>Influencer</div>
        <div className="py-2">
          <div className="log-out-btn" onClick={logout}>
            <div className="d-flex align-items-center">
              <div>
                <img src={logoutIcon} />
              </div>
              <div className="pt-1 pl-1">Logout</div>
            </div>
          </div>
        </div>

      </div>
    </aside>
  );
};

export default SideBar;
