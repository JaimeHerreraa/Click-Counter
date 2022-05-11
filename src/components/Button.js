import React from "react";
import "../stylesheets/Button.css";

const Button = ({text, handleClick}) => {
    return (
        <button onClick={handleClick} className={text === "Click" ? "click-button" : "reset-button"}>{text}</button>
    )
}

export default Button;