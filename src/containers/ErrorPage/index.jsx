const ErrorPage = ({ errorMessage }) => {
    return (
        <div>
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>{errorMessage}</p>
        </div>
    );
};

export default ErrorPage;
