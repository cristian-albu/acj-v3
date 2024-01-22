"use server";

import React from "react";
import db from "@/lib/pg";
import HomeView from "@/views/home-view";

const HomePage = async () => {
    const res = await db.query("SELECT * FROM test");

    console.log(res.rows);
    return <HomeView />;
};

export default HomePage;
