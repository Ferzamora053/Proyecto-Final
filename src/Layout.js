import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = () => {
    return (
        <>
        <div>
            <Navbar />
            <Outlet />
        </div>
        <Footer />
        </>
    )
}

export default Layout;