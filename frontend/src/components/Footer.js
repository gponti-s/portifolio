import { useAuth } from "../store/AuthContext";

export const Footer = () => {
    const { appTitle, appSubTitle } = useAuth();
    const currentYear = new Date().getFullYear();

    return (
        <div className="footer">
            <div
                id="icons"
                className="d-flex align-items-center text-secondary"
                style={{ fontSize: "25px" }}
            >
                <div className="flex-grow-1 border-top border-secondary m-3"></div>
                <a href="https://www.instagram.com/guilhermeseletti/" target="_blank" rel="noopener noreferrer" className="link-secondary m-2">
                    <i className="bi bi-instagram m-3"></i>
                </a>
                <a href="https://github.com/gponti-s" target="_blank" rel="noopener noreferrer" className="link-secondary m-2">
                    <i className="bi bi-github m-3"></i>
                </a>
                <a href="https://x.com/GuilhermeSelett" target="_blank" rel="noopener noreferrer" className="link-secondary m-2">
                    <i className="bi bi-twitter-x m-3"></i>
                </a>
                <a href="https://linkedin.com/in/guilherme-ponti" target="_blank" rel="noopener noreferrer" className="link-secondary m-2">
                    <i className="bi bi-linkedin m-3"></i>
                </a>
                <a href="https://youtube.com/@guiselettiify" target="_blank" rel="noopener noreferrer" className="link-secondary m-2">
                    <i className="bi bi-youtube m-3"></i>
                </a>
                <a href="https://github.com/gponti-s" target="_blank" rel="noopener noreferrer" className="link-secondary m-2">
                    <i className="bi bi-tiktok m-3"></i>
                </a>
                <div
                    className="flex-grow-1 border-top border-secondary m-3"
                    style={{ margin: "0 10px" }}
                ></div>
            </div>
            <div id="logoCopyright" className="text-center p-3">
                <h5 className="">{appTitle}</h5>
                <h6 className="text-secondary">{appSubTitle}</h6>
                <p className="fw-lighter fst-italic" style={{ fontSize: "11px" }}>
                    Copyright © {currentYear} {appTitle}
                </p>
            </div>
        </div>
    );
};
