import React from "react";
import '../Style.css';

export const Viewport: React.FC<{children: React.ReactNode}> = ({ children }) => {
    return(
        <>
        <div className="viewport-container">
            { children }
        </div>
        </>
    );
}

export default Viewport;