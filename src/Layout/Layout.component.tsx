import { Outlet } from "react-router-dom";
// import NavBar from "../components/navbar/NavBar.component";
// import { UserProvider } from "../context/UserContext";
import ScrollToTop from "./ScrollToTop.component";
import NavBar from "../components/navbar/NavBar.component";
import UnderNavBar from "../components/navbar/UnderNavBar.component";
import Footer from "../routes/Footer/Footer.section";


export interface Item {
    name: string;
    url?: string;
    children?: Item[];
}

function Layout() {
    return (
        // <UserProvider>
        <>
            <ScrollToTop />
            <UnderNavBar />
            <NavBar />
            <Outlet />
            <Footer />
        </>
        // </UserProvider>
    );
}

export default Layout;
