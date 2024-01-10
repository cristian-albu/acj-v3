"use client";

import { T_ServiceProps } from "@/app/services/[slug]/page";
import React from "react";
import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ServiceView: React.FC<T_ServiceProps> = ({ data }) => {
    return <Page>{data.title}</Page>;
};

export default ServiceView;
