import { RANDOM_GRAY } from "@/lib/constants";
import { Section } from "@/lib/styled";
import styled from "styled-components";

const ContactFormSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const ContactFormSection = () => {
    return <ContactFormSec>ContactForm</ContactFormSec>;
};

export default ContactFormSection;
