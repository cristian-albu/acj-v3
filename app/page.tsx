"use server";
import HomeView from "@/views/home-view/HomeView";

import React from "react";
import db from "@/lib/pg";
import { CustomMDX } from "@/shared/md-editor/MDXRennderer";

const markdown = "Some `backticks` for inline.\n\n```tsx\nbacktick.fences('for blocks')\nconsole.log('hello world')\n```";

const HomePage = async () => {
    const res = await db.query("SELECT * FROM test");

    console.log(res.rows);
    return (
        <>
            <HomeView />
            <CustomMDX src={markdown} />
        </>
    );
};

export default HomePage;
