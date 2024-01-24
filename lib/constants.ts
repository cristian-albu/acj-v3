export const BREAKPOINTS = {
    desktop: 1024,
    tablet: 768,
    mobile: 480,
};

export const MAX_WIDTH = 900;

export const RANDOM_GRAY = () => {
    const randomGrayVal = 256 - Math.floor(Math.random() * 30);
    return `rgb(${randomGrayVal},${randomGrayVal},${randomGrayVal})`;
};
