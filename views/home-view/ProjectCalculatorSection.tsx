import { RANDOM_GRAY } from "@/lib/constants";
import { Section } from "@/lib/styled";
import styled from "styled-components";

const ProjectCalculatorSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const ProjectCalculatorSection = () => {
    return <ProjectCalculatorSec>ProjectCalculator</ProjectCalculatorSec>;
};

export default ProjectCalculatorSection;
