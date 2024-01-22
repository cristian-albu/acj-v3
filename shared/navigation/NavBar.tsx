"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import {
    HiOutlineMenuAlt1,
    HiOutlineHome,
    HiOutlineUser,
    HiOutlineNewspaper,
    HiOutlineDesktopComputer,
    HiOutlinePhotograph,
    HiOutlineMail,
} from "react-icons/hi";
import { Nav, NavList, NavListButton, NavListItem } from "./styled";
import useWindowDimensions from "@/lib/hooks/useWindowDimensions";

type T_NavbarData = {
    title: string;
    link: string;
    icon?: React.ReactElement;
};

const navbar_data: T_NavbarData[] = [
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

const NavBar = () => {
    const { isMobile } = useWindowDimensions();
    const path = usePathname();

    const [style, setStyle] = useState<React.CSSProperties>({ transform: "translateX(100%)", opacity: 0 });

    const handleOpen = () => {
        isMobile && setStyle({ transform: "translateX(0%)", opacity: 1 });
    };

    const handleClose = () => {
        isMobile && setStyle({ transform: "translateX(100%)", opacity: 0 });
    };

    const handleOpenAndClose = () => {
        if (style.opacity == 1) {
            handleClose();
        } else {
            handleOpen();
        }
    };

    return (
        <Nav>
            {isMobile && <NavItem item={navbar_data[0]} />}

            <NavList style={isMobile ? style : undefined}>
                {navbar_data.map(
                    (item: T_NavbarData, i: number) =>
                        (!isMobile || (isMobile && i != 0)) && (
                            <NavItem key={item.title} item={item} list={true} active={path != "/" && path === item.link} />
                        )
                )}
            </NavList>

            {isMobile && (
                <NavListButton onClick={handleOpenAndClose}>
                    <HiOutlineMenuAlt1 />
                </NavListButton>
            )}
        </Nav>
    );
};

const NavItem = ({
    item,
    list,
    button,
    active,
}: {
    item: T_NavbarData;
    list?: boolean;
    button?: boolean;
    active?: boolean;
}) => {
    return (
        <NavListItem as={list ? "li" : "div"}>
            <NavListButton as={button ? "button" : Link} href={button ? undefined : item.link} $active={active}>
                {item.icon}
                <p>{item.title}</p>
            </NavListButton>
        </NavListItem>
    );
};

export default NavBar;
