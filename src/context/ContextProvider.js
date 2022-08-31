import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

const intialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notifications: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);

    const [isClicked, setIsClicked] = useState(intialState);
    
    const handleClick = (clicked) => {
        setIsClicked({...intialState, [clicked]: true})};
    
    const [screenSize, setScreenSize] = useState(undefined)

    const [currentColor, setCurrentColor] = useState('#03C9D7')

    const [currentMode, setCurrentMode] = useState('Light')

    const [themeSettings, setThemeSettings] = useState(false)

    const setMode = (e) => {
        setCurrentMode(e.target.value);

        localStorage.setItem('themeMode', e.target.value)

        setThemeSettings(false);

    }
    
    const setColor = (color) => {
        setCurrentColor(color);

        localStorage.setItem('colorMode', color)

        setThemeSettings(false);
    }




    return (
        <StateContext.Provider
        value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, setCurrentMode, setCurrentColor, themeSettings, setThemeSettings, setMode, setColor}}
        >
            { children }
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);