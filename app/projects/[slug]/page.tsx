"use server";
import { getProjectData, getSlugs } from "@/lib/queries";
import ProjectView from "@/views/projects-view/project";

import { notFound } from "next/navigation";
import React from "react";

export type T_ProjectData = {
    title: string;
    content: string;
};

export type T_ProjectProps = {
    data: T_ProjectData;
};

// This pre-generates the static paths for the blog posts at BUILD TIME!!!
export const generateStaticParams = async () => {
    const slugs = await getSlugs();
    return slugs.map((post) => ({ slug: post }));
};

const Project = async ({ params }: { params: { slug: string } }) => {
    const slugs = await getSlugs();

    const data = await getProjectData(params.slug);

    if (!slugs.includes(params.slug)) {
        return notFound();
    }

    return <ProjectView data={data} />;
};

export default Project;
