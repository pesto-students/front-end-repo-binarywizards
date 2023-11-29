import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login-page";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

function Router() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default Router;
