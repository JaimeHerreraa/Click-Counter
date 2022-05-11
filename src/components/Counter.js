import React from "react";
import "../stylesheets/Counter.css"

const Counter = ({value}) => {
    return (
        <div className="counter">
            {value}
        </div>
    )
}

export default Counter;