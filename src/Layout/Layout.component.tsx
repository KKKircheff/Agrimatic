import { Outlet } from "react-router-dom";
// import NavBar from "../components/navbar/NavBar.component";
// import { UserProvider } from "../context/UserContext";
import ScrollToTop from "./ScrollToTop.component";


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
            {/* <NavBar /> */}
            <Outlet />
        </>
        // </UserProvider>
    );
}

export default Layout;
