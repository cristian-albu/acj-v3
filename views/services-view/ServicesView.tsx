"use client";
import PriceCalculator from "@/shared/price-calculator/PriceCalculator";
import React from "react";
import { T_PriceCalculatorProps } from "./types";

const priceCalculator_data: T_PriceCalculatorProps = {
    title: "Development services",
    description: "Development services description",
    items: [
        {
            name: "Web development",
            price: 0,
            mandatory: true,
            type: "checkbox",
        },
    ],
};

const ServicesView = () => {
    return (
        <div>
            <PriceCalculator data={priceCalculator_data} />
        </div>
    );
};

export default ServicesView;
