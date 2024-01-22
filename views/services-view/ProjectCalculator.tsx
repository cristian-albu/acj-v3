import React from "react";
import styled from "styled-components";

const CalculatorSection = styled.section`
    width: 100%;
    min-width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CalculatorContainer = styled.div``;

const CalculatorWrapper = styled.div``;

const ProjectCalculator = () => {
    return (
        <CalculatorSection>
            <CalculatorContainer>
                <CalculatorWrapper>Calculator</CalculatorWrapper>
            </CalculatorContainer>
        </CalculatorSection>
    );
};

export default ProjectCalculator;
