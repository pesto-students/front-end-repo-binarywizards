import { useRouteError, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);
  const navigateToHome = () => {
    return navigate("/app");
  };
  return (
    <div className="max-w-4xl mx-auto pb-16 flex items-center h-full p-16 bg-white text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-800">
            <span className="sr-only">Error</span>404
            <p className="text-2xl font-semibold">
              <i>{error.statusText || error.message}</i>
            </p>
          </h2>

          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p>

          <p className="mt-4 mb-8 text-gray-800">
            But dont worry, you can find plenty of other things on our App.
          </p>
          <button
            onClick={navigateToHome}
            className="px-8 py-3 font-semibold rounded bg-accent text-white"
          >
            Back to home
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
