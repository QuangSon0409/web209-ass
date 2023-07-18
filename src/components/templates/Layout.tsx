import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      LayOutClient page up
      <Header />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Layout;
