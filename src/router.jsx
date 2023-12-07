import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import SignupPage from "./pages/signup-page";
import ForgotPasswordPage from "./pages/forgot-password-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
]);

function Router() {
  return (
    <div className="h-full">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Router;
