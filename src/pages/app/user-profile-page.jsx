import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { apiService } from "src/api-service/api-service";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInfo } from "src/store/userSlice";
import PencilIcon from "src/assets/icons/pencil.svg?react";
import { getUsernameAbbreviation } from "src/utils/utils";
import FetchError from "src/components/fetch-error";
import Skeleton from "react-loading-skeleton";

const UserProfilePage = () => {
  const { user } = useSelector((state) => state.userState);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    const response = await apiService.user();
    console.log(response);
    if (!response.status) {
      toast.error(response.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
      throw new Error(response.msg);
    }
    return response.data;
  };

  const {
    isLoading,
    error,
    data: userInfo,
  } = useQuery({
    queryKey: ["user-profile"],
    queryFn: fetchUser,
  });

  useEffect(() => {
    if (userInfo) {
      dispatch(setUserInfo({ user: userInfo }));
    } else {
      dispatch(setUserInfo({ user: {} }));
    }
  }, [userInfo]);

  if (error) {
    return (
      <div>
        <FetchError />
      </div>
    );
  }
  return (
    <div className="h-full flex flex-col relative">
      <div className="h-1/3 bg-primary w-full"></div>
      <div className="bg-white p-8 rounded-lg absolute left-1/2 top-[20%] -translate-x-1/2 shadow-lg min-w-[340px] sm:min-w-[480px]">
        {isLoading ? (
          <div className="mb-5">
            <div className="flex items-center">
              <div>
                <Skeleton circle={true} className="w-20 h-20 mr-2" />
              </div>
              <div>
                <Skeleton className="w-40 h-8" />
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex items-center mb-5">
              <div className="flex items-center">
                <div className="h-20 w-20 flex items-center justify-center mr-2 rounded-full bg-[#B4C6FC] border-2 border-white border-solid">
                  <h5 className="text-3xl text-gray-900 leading-none font-bold uppercase">
                    {getUsernameAbbreviation(user.username || "username")}
                  </h5>
                </div>
                <h1 className="text-2xl leading-none font-bold text-gray-900 capitalize">
                  {user.username || "username"}
                </h1>
              </div>
              <div className="ml-4">
                <button className="flex items-center rounded-lg px-3 py-1.5 bg-accent-200 text-gray-900 font-semibold text-sm">
                  <PencilIcon className="mr-1 w-4" />
                  <span>Edit</span>
                </button>
              </div>
            </div>
          </>
        )}
        <div>
          <div className="border border-gray-300 border-solid rounded-lg p-4">
            <div className="flex justify-between items-end">
              {isLoading ? (
                <div>
                  <Skeleton width={250} height={30} className="mb-2" />
                  <Skeleton width={250} height={30} />
                </div>
              ) : (
                <div className="flex flex-col">
                  <div>
                    <span className="text-base text-gray-600">Email</span>
                  </div>
                  <div>
                    <span className="text-base text-gray-900 font-semibold">
                      {user.email}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
