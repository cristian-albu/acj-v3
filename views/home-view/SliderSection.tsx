import styled from "styled-components";
import { RANDOM_GRAY } from "@/lib/constants";
import { Section } from "@/lib/styled";

const SliderSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const SliderSection = () => {
    return <SliderSec>Slider</SliderSec>;
};

export default SliderSection;
