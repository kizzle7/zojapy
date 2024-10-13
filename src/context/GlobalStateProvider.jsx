// GlobalStateProvider.js
import React, { useState } from "react";
import { contacts } from "../constants/msg-contacts";
import { GlobalStateContext } from "./globalContext";

export const GlobalStateProvider = ({ children }) => {
    const [state, setState] = useState({
        renderingScreen: 'show-index',
        selectedChatContact:contacts[0],
        onboardingEmail:""
    });

    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};
