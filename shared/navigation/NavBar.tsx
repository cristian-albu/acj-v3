"use client";
import useWindowDimensions from "@/lib/utils/useWindowDimensions";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Nav, NavList, NavListButton, NavListItem } from "./styled";
import { T_NavbarData } from "@/data/navigation-data";

const NavBar: React.FC<{ data: T_NavbarData[] }> = ({ data }) => {
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
            {isMobile && <NavItem item={data[0]} onClick={handleClose} />}

            <NavList style={isMobile ? style : undefined}>
                {data.map(
                    (item: T_NavbarData, i: number) =>
                        (!isMobile || (isMobile && i != 0)) && (
                            <NavItem
                                key={item.title}
                                item={item}
                                list={true}
                                active={path != "/" && path === item.link}
                                onClick={handleClose}
                            />
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

type T_NavItem = {
    item: T_NavbarData;
    list?: boolean;
    button?: boolean;
    active?: boolean;
    onClick?: () => void;
};

const NavItem = ({ item, list, button, active, onClick }: T_NavItem) => {
    return (
        <NavListItem as={list ? "li" : "div"}>
            <NavListButton
                as={button ? "button" : Link}
                href={button ? undefined : item.link}
                $active={active}
                onClick={onClick}
            >
                {item.icon}
                <p>{item.title}</p>
            </NavListButton>
        </NavListItem>
    );
};

export default NavBar;
