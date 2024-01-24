import styled from "styled-components";
import { RANDOM_GRAY } from "@/lib/constants";
import Image from "next/image";
import { FC } from "react";
import { Section } from "@/lib/styled";
import { T_HomeData } from "../types";
import BackgroundWave from "./BackgroundWave";

const HeroSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const HeroSection: FC<T_HomeData> = ({ image }) => {
    return (
        <HeroSec>
            <h1>Hero</h1>
            <Image src={image.url} width={50} height={50} alt={image.alt} />
            <BackgroundWave />
        </HeroSec>
    );
};

export default HeroSection;
