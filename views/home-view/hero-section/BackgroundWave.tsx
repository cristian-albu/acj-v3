import useAnimatePath from "@/lib/hooks/useAnimatePath";
import React from "react";
import styled from "styled-components";

const animatePathObj = {
    path1: "m0,1000s367.86-178.16,297-378c-50-141,145.82-396.57,369-361C917,301,1000,0,1000,0v1000H0Z",
    path2: "m0,1000s257-198,297-378c32.45-146.04,162.03-270.22,369-361C894,161,1000,0,1000,0v1000H0Z",
    duration: 2000,
};

const Path = styled.path`
    transition: all ${animatePathObj.duration} ease-in-out;
`;

const BackgroundWave = () => {
    const currentPath = useAnimatePath(animatePathObj);
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
            <Path d={currentPath} />
        </svg>
    );
};

export default BackgroundWave;
