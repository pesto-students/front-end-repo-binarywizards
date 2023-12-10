import { Outlet } from "react-router-dom";
import AppNavbar from "src/components/app-navbar";

const MainLayout = () => {
  return (
    <>
      <div>
        <AppNavbar />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
