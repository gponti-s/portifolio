import { Link } from "react-router-dom";

export const NotFoundPage: React.FC = () => {
    return(
        <main className="container">
            <div className="section section-gray ">
                <div className="fw-bold fs-1 text-center">404</div>
                <div className="fs-3 mx-5">Sorry,<br/> The page you requested was not found</div>
                <Link to="/">
                    <button className="btn btn-dark m-5" aria-label="Go back to home">
                        Go Back Home
                    </button>
                </Link>
            </div>
        </main>
    );
}