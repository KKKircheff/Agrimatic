import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const scrollToTop = () => {
    document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Optional if you want to skip the scrolling animation
    });
}

export default function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Optional if you want to skip the scrolling animation
        });
    }, [pathname]);

    return null;
}
