import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HomeView from "..";
import HeroSection from "../hero-section/HeroSection";
import { hero_data } from "../data/hero-data";

describe("Hero Section", () => {
    it("renders a heading", () => {
        render(<HeroSection {...hero_data} />);

        const heading = screen.getByRole("heading", { level: 1 });

        expect(heading).toBeInTheDocument();
    });
});
