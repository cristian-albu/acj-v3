import {
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineNewspaper,
    HiOutlineDesktopComputer,
    HiOutlinePhotograph,
    HiOutlineMail,
} from "react-icons/hi";

export type T_NavbarData = {
    title: string;
    link: string;
    icon?: React.ReactElement;
};

export const navbar_data: T_NavbarData[] = [
    {
        title: "Home",
        link: "/",
        icon: <HiOutlineHome />,
    },
    {
        title: "About",
        link: "/about",
        icon: <HiOutlineUser />,
    },
    {
        title: "Services",
        link: "/services",
        icon: <HiOutlineDesktopComputer />,
    },
    {
        title: "Projects",
        link: "/projects",
        icon: <HiOutlinePhotograph />,
    },
    {
        title: "Blog",
        link: "/blog",
        icon: <HiOutlineNewspaper />,
    },
    {
        title: "Contact",
        link: "/contact",
        icon: <HiOutlineMail />,
    },
];
