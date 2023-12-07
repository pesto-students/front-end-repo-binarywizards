import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setActiveSection } from "src/store/navbarSlice";
import { sections } from "src/constants/constants";

const Navbar = () => {
  const { activeSection } = useSelector((state) => state.navbarState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleActiveSection = (section) => {
    dispatch(setActiveSection({ activeSection: section }));
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href={`#${sections.home}`}
          className="flex items-center font-semibold text-primary focus:outline-accent dark:text-white space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            PerfectResume.ai
          </span>
        </a>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-accent focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 hidden sm:block"
            onClick={() => navigate("/login")}
          >
            Login
          </button>
          <button
            type="button"
            className="text-white bg-accent hover:bg-accent-900 focus:ring-4  focus:outline-none  focus:ring-accent-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 hidden sm:block"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>

          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg">
            <li>
              <a
                href={`#${sections.home}`}
                className={`block py-2 px-3 ${
                  activeSection === sections.home
                    ? "text-primary"
                    : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0`}
                aria-current="page"
                onClick={() => handleActiveSection(sections.home)}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href={`#${sections.templates}`}
                className={`block py-2 px-3 ${
                  activeSection === sections.templates
                    ? "text-primary"
                    : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0`}
                onClick={() => handleActiveSection(sections.templates)}
              >
                Templates
              </a>
            </li>
            <li>
              <a
                href={`#${sections.features}`}
                className={`block py-2 px-3 ${
                  activeSection === sections.features
                    ? "text-primary"
                    : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0`}
                onClick={() => handleActiveSection(sections.features)}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href={`#${sections.about}`}
                className={`block py-2 px-3 ${
                  activeSection === sections.about
                    ? "text-primary"
                    : "text-gray-900"
                } rounded hover:bg-gray-100 md:hover:bg-transparent hover:text-primary md:p-0`}
                onClick={() => handleActiveSection(sections.about)}
              >
                About Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
