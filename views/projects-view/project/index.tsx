"use client";

import { T_ProjectProps } from "@/app/projects/[slug]/page";
import React from "react";
import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ProjectView: React.FC<T_ProjectProps> = ({ data }) => {
    return <Page>{data.title}</Page>;
};

export default ProjectView;
