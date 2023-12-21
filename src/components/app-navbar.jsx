import { NavLink } from "react-router-dom";

const AppNavbar = () => {
  return (
    <nav className="bg-primary sticky top-0 w-full z-20  start-0">
      <div className="flex flex-wrap items-center justify-between mx-auto px-10 py-4">
        <a
          to={"/app"}
          className="flex items-center font-semibold text-white focus:outline-accent dark:text-white space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            PerfectResume.ai
          </span>
        </a>
        <div className="flex lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse">
          <h1 className="text-2xl text-white">Username</h1>
        </div>
        <div
          className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1 "
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 text-lg ">
            <li>
              <NavLink
                to={"/app"}
                end
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-accent" : "bg-transparent"
                  } block py-2 px-3  text-white text-center hover:bg-accent rounded-lg`
                }
              >
                My Resumes
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"build-resume"}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-accent" : "bg-transparent"
                  } block py-2 px-3  text-white text-center hover:bg-accent rounded-lg`
                }
              >
                Build Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"review-system"}
                className={({ isActive }) =>
                  `${
                    isActive ? "bg-accent" : "bg-transparent"
                  } block py-2 px-3  text-white text-center hover:bg-accent rounded-lg`
                }
              >
                Review System
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default AppNavbar;
