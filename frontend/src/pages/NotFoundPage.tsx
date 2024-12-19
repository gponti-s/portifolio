import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return(
        <main className="container">
            <div className="section section-gray glass-effect">
                <div className="fw-bold fs-1 text-center">404</div>
                <div className="fs-3 mx-5">Sorry,<br/> The page you requested was not found</div>
                    <button className="btn btn-dark m-5" onClick={() => window.location.href = '/'} aria-label="Go back to home">
                        Go to Home
                    </button>
            </div>
        </main>
    );
}