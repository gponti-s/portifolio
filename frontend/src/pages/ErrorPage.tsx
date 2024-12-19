import React from 'react';

const ErrorPage: React.FC<{ message: string }> = ({ message }) => {
    return (
        <main className='container'>
            <div className="section section-gray glass-effect mx-5">
                <h1>Something went wrong :(</h1>
                <p>{message}</p>
                <button className="btn btn-dark mx-2" type="button" onClick={() => window.location.reload()}>Retry</button>
                <button className="btn btn-dark mx-2" type="button" onClick={() => window.location.href = '/'}>Go to Home</button>
            </div>
        </main>
    );
};

export default ErrorPage;
