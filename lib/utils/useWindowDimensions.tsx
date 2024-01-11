"use client";
import { useEffect, useState } from "react";
import { BREAKPOINTS } from "../constants";

export const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState({ height: 300, width: 300, isMobile: true });

    useEffect(() => {
        function handleResize() {
            setWindowDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
                isMobile: window.innerWidth <= BREAKPOINTS.tablet,
            });
        }

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
};

export default useWindowDimensions;
