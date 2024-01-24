"use client";
import React from "react";
import { hero_data } from "./data/hero-data";
import HeroSection from "./hero-section/HeroSection";
import ArticleCardsSection from "./ArticleCardsSection";
import SliderSection from "./SliderSection";
import ScheduleMeetingSection from "./ScheduleMeetingSection";
import ScrollGridSection from "./ScrollGridSection";
import ProjectCalculatorSection from "./ProjectCalculatorSection";
import ContactFormSection from "./ContactFormSection";

const HomeView = () => {
    return (
        <div>
            <HeroSection {...hero_data} />
            <ArticleCardsSection />
            <SliderSection />
            <ScrollGridSection />
            <ProjectCalculatorSection />
            <ScheduleMeetingSection />
            <ContactFormSection />
        </div>
    );
};

export default HomeView;
