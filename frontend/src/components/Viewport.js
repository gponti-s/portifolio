import React from "react";

export const Viewport = ({ children }) => {
    return(
        <div className="viewport-container">
            { children }
        </div>
    );
}

export default Viewport;