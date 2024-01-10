"use server";
import PostView from "@/views/blog-view/PostView";
import { notFound } from "next/navigation";
import React from "react";

export type T_PostData = {
    title: string;
    content: string;
};

export type T_PostProps = {
    data: T_PostData;
};

export const getSlugs = async () => {
    return ["slug-1", "slug-2"];
};

export const getPostData = async (slug: string) => {
    return { title: "title", content: "content" };
};

// This pre-generates the static paths for the blog posts at BUILD TIME!!!
export const generateStaticParams = async () => {
    const slugs = await getSlugs();
    return slugs.map((post) => ({ slug: post }));
};

const Post = async ({ params }: { params: { slug: string } }) => {
    const slugs = await getSlugs();

    const data = await getPostData(params.slug);

    if (!slugs.includes(params.slug)) {
        return notFound();
    }

    return <PostView data={data} />;
};

export default Post;