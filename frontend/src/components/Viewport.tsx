import React from "react";
import { Routes, Route } from 'react-router-dom';
import { ALL_ROUTES } from "../constants/routes";
import '../Style.css';

export const Viewport: React.FC = () => {
    return (
        <div className="viewport-container">
            <Routes>
                {ALL_ROUTES.map((route) => (
                    <Route key={route.path} path={route.path} element={route.element} />
                ))}
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </div>
    );
}

export default Viewport;