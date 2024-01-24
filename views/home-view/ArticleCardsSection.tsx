import styled from "styled-components";
import { RANDOM_GRAY } from "@/lib/constants";
import { Section } from "@/lib/styled";

const ArticleCardsSec = styled(Section)`
    background-color: ${RANDOM_GRAY()};
`;

const ArticleCardsSection = () => {
    return <ArticleCardsSec>Articles</ArticleCardsSec>;
};

export default ArticleCardsSection;
