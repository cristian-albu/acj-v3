"use client";
import { T_PriceCalculatorProps } from "@/views/services-view/types";
import React from "react";

const PriceCalculator: React.FC<{ data: T_PriceCalculatorProps }> = ({ data }) => {
    const { title, description, items } = data;
    console.log(items);
    return <div>PriceCalculator</div>;
};

export default PriceCalculator;
