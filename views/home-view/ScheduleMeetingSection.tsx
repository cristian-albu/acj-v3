import { RANDOM_GRAY } from "@/lib/constants";
import { Section } from "@/lib/styled";
import styled from "styled-components";

const ScheduleMeetingSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const ScheduleMeetingSection = () => {
    return <ScheduleMeetingSec>ScheduleMeeting</ScheduleMeetingSec>;
};

export default ScheduleMeetingSection;
