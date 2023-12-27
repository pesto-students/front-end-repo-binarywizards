import Tippy from "@tippyjs/react";
import { useRef, useState } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import useAuth from "src/hooks/useAuth";
import {
  clearErrors,
  parseErrors,
  renderErrors,
  validator,
} from "src/utils/form-validator";
import SpinnerIcon from "src/assets/icons/spinner.svg?react";

const validate = validator({
  type: "object",
  required: ["email", "password"],
  properties: {
    email: {
      type: "string",
      format: "email",
      minLength: 1,
      errorMessage: {
        minLength: "Email is required",
        format: "Please provide a valid Email",
      },
    },
    password: {
      type: "string",
      minLength: 1,
      errorMessage: {
        minLength: "Password is required",
      },
    },
  },
  errorMessage: {
    required: {
      email: "Email is required",
      password: "Password is required",
    },
  },
});

const LoginPage = () => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const redirect = searchParams.get("redirect");
  const { authorize } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = (flag) => {
    setShowPassword(flag);
  };

  const resolveRedirection = (path, redirect) => {
    console.log("redirect: ", redirect);
    return redirect ? `${path}?redirect=${redirect}` : path;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = formRef.current;
    const { email, password } = formData;
    const isValid = validate({ email: email.value, password: password.value });
    if (!isValid) {
      const errors = parseErrors(validate.errors);
      renderErrors(errors, formData, ["email", "password"]);
      return;
    }
    clearErrors(formData, ["email", "password"]);

    const credentials = { email: email.value, password: password.value };

    setIsLoading(true);
    const success = await authorize(credentials);
    setIsLoading(false);
    if (success) {
      const path = redirect ? redirect : "/app";
      navigate(path);
    }
  };

  return (
    <div className="h-full flex flex-col justify-center bg-gray-50 dark:bg-gray-900 ">
      <section>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            to={resolveRedirection("/", redirect)}
            className="flex items-center mb-6 text-2xl font-semibold text-primary focus:outline-accent dark:text-white"
          >
            PerfectResume.ai
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold  text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Welcome Back
              </h1>

              <form className="max-w-sm mx-auto" ref={formRef}>
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
                  <p
                    data-error="true"
                    className="hidden peer-[.error]:block mt-2 text-sm text-red-600 dark:text-red-500"
                  ></p>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      className="peer bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Password"
                      required
                    />
                    <p
                      data-error="true"
                      className="hidden peer-[.error]:block mt-2 text-sm text-red-600 dark:text-red-500"
                    ></p>
                    <div className="absolute inset-y-0 end-0 flex items-center pe-3.5 h-[54px]">
                      {showPassword ? (
                        <Tippy content="Hide Password">
                          <button
                            className="text-gray-700"
                            type="button"
                            onClick={() => togglePasswordVisibility(false)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 pointer-events-none"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                              />
                            </svg>
                          </button>
                        </Tippy>
                      ) : (
                        <Tippy content="Show Password">
                          <button
                            className="text-gray-700"
                            type="button"
                            onClick={() => togglePasswordVisibility(true)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                              className="w-6 h-6 pointer-events-none"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                            </svg>
                          </button>
                        </Tippy>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex items-start mb-5">
                  <Link
                    to={resolveRedirection("/forgot-password", redirect)}
                    className="font-medium text-primary focus:outline-accent dark:text-blue-500 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  disabled={isLoading ? true : false}
                  className={`${
                    isLoading
                      ? "bg-accent-800 cursor-not-allowed"
                      : "bg-accent cursor-pointer"
                  } text-white hover:opacity-95 focus:ring-4 focus:outline-none  focus:ring-accent-300 font-medium rounded-lg text-sm w-full px-5 py-4 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  onClick={handleSubmit}
                >
                  {isLoading ? (
                    <>
                      <SpinnerIcon />
                      <span>Connecting...</span>
                    </>
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
              <div className="text-center">
                <p className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                  Don&apos;t have an account?
                  <Link
                    to={resolveRedirection("/signup", redirect)}
                    className="text-primary hover:underline ml-2 focus:outline-accent dark:text-blue-500"
                  >
                    Sign up
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

export default LoginPage;
