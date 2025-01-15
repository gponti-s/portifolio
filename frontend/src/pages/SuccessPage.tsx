import React from "react";

const SuccessPage: React.FC<{message: string}> = ({message}) => {
    return (
        <main className="container">
            <div className="section section-gray glass-effect mx-5">
            <h1>Congratulation</h1>
            <p>{message}</p>
            <button className="btn btn-dark m-2" type="button" onClick={() => window.location.href = '/'}>Go to Home</button>
            </div>
        </main>
    );
};

export default SuccessPage;