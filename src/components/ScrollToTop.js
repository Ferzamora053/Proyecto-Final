import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const navigate = useNavigate();
    const { pathname } = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [pathname, navigate]);

    return null;
};

export default ScrollToTop;