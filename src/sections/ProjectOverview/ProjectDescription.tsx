import styled from "styled-components";

import { text36, text16 } from "../../styles/typography";

interface ProjectDescriptionProps {
  projectTitle: string;
  descriptionArray: string[];
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: start;
  width: 100%;
`;

const Headline = styled.h3`
  ${text36}
`;

const Paragraph = styled.p`
  ${text16}
  line-height: 1.6;
`;

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  projectTitle,
  descriptionArray,
}) => {
  const description = descriptionArray.map((para, i) => {
    return <Paragraph key={i}>{para}</Paragraph>;
  });

  return (
    <Container>
      <Headline>{projectTitle}</Headline>
      <DescriptionContainer>{description}</DescriptionContainer>
    </Container>
  );
};
