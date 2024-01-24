import { T_HomeData } from "../types";

export const hero_data: T_HomeData = {
    title: "Home",
    subtitle: "Welcome to the home page!",
    valueProposition: "This is the home page. This will show what I can do for you.",
    image: { alt: "Home", url: "/tech-icons/nextjs_logo.png" },
    ctaBtn: {
        label: "Contact Us",
        link: "/contact",
    },
    floatingIcons: [
        { alt: "React", url: "/tech-icons/nextjs_logo.png" },
        { alt: "NextJs", url: "/tech-icons/nextjs_logo.png" },
        { alt: "MySQL", url: "/tech-icons/nextjs_logo.png" },
    ],
};
