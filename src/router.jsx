import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
  useLocation,
} from "react-router-dom";
import PropTypes from "prop-types";
import LoginPage from "./pages/login-page";
import HomePage from "./pages/home-page";
import SignupPage from "./pages/signup-page";
import ForgotPasswordPage from "./pages/forgot-password-page";
import MyResumes from "./pages/app/my-resumes-page";
import useAuth from "./hooks/useAuth";
import MainLayout from "./layouts/main-layout";
import BuildResume from "./pages/app/build-resume-page";
import ReviewSystem from "./pages/app/review-system-page";
import CreateTemplate from "./pages/app/create-template";

const PublicRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }
  return !isAuthenticated ? children : <Navigate to="/app" replace />;
};
const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Loading...</div>;
  }
  return isAuthenticated ? (
    children
  ) : (
    <Navigate to={`/login?redirect=${location.pathname}`} replace />
  );
};

const propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

PublicRoute.propTypes = {
  children: propTypes.children,
};
PrivateRoute.propTypes = {
  children: propTypes.children,
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        <HomePage />
      </PublicRoute>
    ),
  },
  {
    path: "/app",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <MyResumes />
          </PrivateRoute>
        ),
      },
      {
        path: "build-resume",
        element: (
          <PrivateRoute>
            <BuildResume />
          </PrivateRoute>
        ),
      },
      {
        path: "review-system",
        element: (
          <PrivateRoute>
            <ReviewSystem />
          </PrivateRoute>
        ),
      },
      {
        path: "create-template",
        element: (
          <PrivateRoute>
            <CreateTemplate />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: (
      <PublicRoute>
        <LoginPage />
      </PublicRoute>
    ),
  },
  {
    path: "/signup",
    element: (
      <PublicRoute>
        <SignupPage />
      </PublicRoute>
    ),
  },
  {
    path: "/forgot-password",
    element: (
      <PublicRoute>
        <ForgotPasswordPage />
      </PublicRoute>
    ),
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
