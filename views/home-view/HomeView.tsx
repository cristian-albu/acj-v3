"use client";
import MarkdownEditor from "@/shared/md-editor/MarkdownEditor";
import React from "react";
import styled from "styled-components";

const Page = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const HomeView = () => {
    return (
        <Page>
            <MarkdownEditor />
        </Page>
    );
};

export default HomeView;
