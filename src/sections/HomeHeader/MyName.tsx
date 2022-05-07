import styled from "styled-components";

import { text56, text36, text16 } from "../../styles/typography";

const NameContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: start;
  width: 100%;
`;

const Name = styled.h1`
  ${text56}
`;

const Summary = styled.p`
  ${text16}
  line-height: 1.6;
`;

export const MyName = () => {
  return (
    <NameContainer>
      <Name>Dan Boyle</Name>
      <Summary>
        This is my summary. It is one small paragraph to introduce myself and
        tell you who I am. A marketer... copywriter... and developer.
      </Summary>
    </NameContainer>
  );
};
