import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="w-full flex items-center m-8 flex-col">
      <h1 className="mb-8">Home page</h1>
      <br />
      <Link to={"/login"}>
        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Login
        </button>
      </Link>
    </div>
  );
};

export default HomePage;
