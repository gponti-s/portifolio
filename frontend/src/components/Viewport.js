import React from "react";
import '../Style.css';

export const Viewport = ({ children }) => {
    return(
        <>
        <div className="viewport-container">
            { children }
        </div>
        <div className="footer">FOOTER</div>
        </>
    );
}

export default Viewport;