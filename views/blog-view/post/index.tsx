"use client";

import { T_PostProps } from "@/app/blog/[slug]/page";
import React from "react";
import styled from "styled-components";

export const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PostView: React.FC<T_PostProps> = ({ data }) => {
    return <Page>{data.title}</Page>;
};

export default PostView;
