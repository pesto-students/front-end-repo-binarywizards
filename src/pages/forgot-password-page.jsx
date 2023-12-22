import { Link } from "react-router-dom";

const ForgotPasswordPage = () => {
  return (
    <div className="h-full flex flex-col justify-center bg-gray-50 dark:bg-gray-900 ">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to={"/"}
            className="flex items-center mb-6 text-2xl font-semibold text-primary focus:outline-accent dark:text-white"
          >
            PerfectResume.ai
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold  text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Reset your password
              </h1>
              <p className="ms-2 text-sm text-center font-medium text-gray-900 dark:text-gray-300">
                Enter your email address and we will send you instructions to
                reset your password.
              </p>

              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full  p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Email address"
                    required
                  />
                  <p className="hidden peer-[.is-required]:peer-required:block mt-2 text-sm text-red-600 dark:text-red-500">
                    <span className="font-medium">Email</span> is rquired
                  </p>
                </div>

                <button
                  type="submit"
                  className="text-white bg-accent hover:opacity-95 focus:ring-4 focus:outline-none  focus:ring-accent-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Continue
                </button>
              </form>
              <div className="text-center">
                <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  <Link
                    to={"/login"}
                    className="text-primary hover:underline ml-2 focus:outline-accent dark:text-blue-500"
                  >
                    Back to Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForgotPasswordPage;
