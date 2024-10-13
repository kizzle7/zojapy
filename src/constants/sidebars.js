import myporftfolio from "../Assets/account-mn.svg";
import myGroup from "../Assets/users-mn.svg";
import mesages from "../Assets/messages-mn.svg";
import growth from "../Assets/growth-mn.svg";
import pack from "../Assets/dollar-mn.svg";
import settings from "../Assets/settings-mn.svg"

import activemyporftfolio from "../Assets/account-mn-active.svg";
import activeMessage from "../Assets/message-mn-active.svg";

const sideMenus = [
  { id: 1, name: "My Portfolio", path: "my-portfolio", icon: myporftfolio, activeIcon: activemyporftfolio },
  { id: 2, name: "My Group", path: "#", icon: myGroup },
  { id: 3, name: "Messages", path: "messages", icon: mesages, activeIcon: activeMessage },
  { id: 31, name: "Analytics", path: "#", icon: growth },
  { id: 43, name: "Pack", path: "#", icon: pack },
  { id: 5, name: "Settings", path: "#", icon: settings },
]
export default sideMenus;
