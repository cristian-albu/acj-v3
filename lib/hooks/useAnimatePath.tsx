import { useEffect, useState } from "react";

export type T_AnimatePathObject = {
    path1: string;
    path2: string;
    duration: number;
};

const useAnimatePath = (obj: T_AnimatePathObject) => {
    const [currentPath, setCurrentPath] = useState(obj.path1);

    useEffect(() => {
        const animationTimeout = setInterval(() => {
            setCurrentPath((prev) => (prev === obj.path1 ? obj.path2 : obj.path1));
        }, obj.duration);

        return () => clearInterval(animationTimeout);
    }, []);

    return currentPath;
};

export default useAnimatePath;
