"use server";
import ServiceView from "@/views/services-view/ServiceView";
import { notFound } from "next/navigation";
import React from "react";

export type T_ServiceData = {
    title: string;
    content: string;
};

export type T_ServiceProps = {
    data: T_ServiceData;
};

export const getSlugs = async () => {
    return ["slug-1", "slug-2"];
};

export const getServiceData = async (slug: string) => {
    return { title: "title", content: "content" };
};

// This pre-generates the static paths for the blog posts at BUILD TIME!!!
export const generateStaticParams = async () => {
    const slugs = await getSlugs();
    return slugs.map((post) => ({ slug: post }));
};

const Service = async ({ params }: { params: { slug: string } }) => {
    const slugs = await getSlugs();

    const data = await getServiceData(params.slug);

    if (!slugs.includes(params.slug)) {
        return notFound();
    }

    return <ServiceView data={data} />;
};

export default Service;
