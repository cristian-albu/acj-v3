import { BREAKPOINTS } from "@/lib/constants";
import styled from "styled-components";

export const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #fff;
    z-index: 100;
    display: flex;
    align-items: stretch;
    justify-content: center;
    border-bottom: 1px solid #ebebeb;
    transition: opacity 200ms ease-in-out;

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        justify-content: space-between;
    }
`;

export const NavList = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    transition: opacity 200ms ease-in-out, transform 200ms ease-in-out;

    & > li:first-child {
        margin-right: auto;
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        position: absolute;
        top: calc(100% + 1px);
        right: 0;
        width: 50%;
        background-color: #fff;
        flex-direction: column;
        align-items: stretch;
        border: 1px solid #ebebeb;

        & > li:first-child {
            margin-right: 0;
        }
    }
`;

export const NavListItem = styled.li``;

export const NavListButton = styled.button<{ $active?: boolean }>`
    padding: 0.7rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    cursor: pointer;
    border: none;
    background-color: transparent;
    outline: none;
    font-size: 1rem;
    transition: background-color 200ms ease-in-out, color 200ms ease-in-out, opacity 200ms ease-in-out;

    & > p {
        color: ${({ $active }) => ($active ? "blue" : "inherit")};
    }

    &:hover {
        background-color: #f7f7f7;
        color: blue;
    }

    @media (max-width: ${BREAKPOINTS.tablet}px) {
        justify-content: flex-start;
    }
`;
