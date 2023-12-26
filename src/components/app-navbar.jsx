import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { apiService } from "src/api-service/api-service";
import { useQuery } from "@tanstack/react-query";
import { setUserInfo } from "src/store/userSlice";
import { useEffect } from "react";
import { initFlowbite } from "flowbite";
import { getUsernameAbbreviation } from "src/utils/utils";
import useAuth from "src/hooks/useAuth";

const AppNavbar = () => {
  const { logout } = useAuth();
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUser = async () => {
    const response = await apiService.user();
    if (!response.status) {
      toast.error(response.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      throw new Error(response.msg);
    }
    return response.data;
  };

  const { data: userInfo } = useQuery({
    queryKey: ["user"],
    queryFn: fetchUser,
  });

  useEffect(() => {
    if (userInfo) {
      dispatch(setUserInfo({ user: userInfo }));
    } else {
      dispatch(setUserInfo({ user: {} }));
    }
  }, [userInfo]);

  useEffect(() => {
    initFlowbite();
  }, []);

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
        <div
          className="flex items-center lg:order-2 space-x-3 lg:space-x-0 rtl:space-x-reverse cursor-pointer"
          id="dropdownHoverUserProfile"
          data-dropdown-toggle="dropdownUserProfile"
          data-dropdown-trigger="hover"
          data-dropdown-placement="bottom-end"
        >
          <div className="h-12 w-12 flex items-center justify-center mr-2 rounded-full bg-accent-400 border-2 border-white border-solid">
            <h5 className="text-lg text-primary leading-none font-bold uppercase">
              {getUsernameAbbreviation(user.username || "username")}
            </h5>
          </div>
          <h1 className="text-lg font-bold capitalize text-white">
            {user.username || "username"}
          </h1>
        </div>
        <div
          id="dropdownUserProfile"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverUserProfile"
          >
            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => navigate("/app/user-profile")}
              >
                Profile
              </a>
            </li>
            <li>
              <a
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                onClick={() => logout()}
              >
                Log out
              </a>
            </li>
          </ul>
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
