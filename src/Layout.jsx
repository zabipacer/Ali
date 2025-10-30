// Layout.js
import { Outlet } from "react-router-dom";


const Layout = () => {
  return (
    <>
  
      <div className="main-content">
        {/* The Outlet will render the matching child route */}
        <Outlet />
      </div>
 
    </>
  );
};

export default Layout;