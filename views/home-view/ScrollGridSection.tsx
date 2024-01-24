import { RANDOM_GRAY } from "@/lib/constants";
import { Section } from "@/lib/styled";
import styled from "styled-components";

const ScrollGridSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const ScrollGridSection = () => {
    return <ScrollGridSec>ScrollGrid</ScrollGridSec>;
};

export default ScrollGridSection;
