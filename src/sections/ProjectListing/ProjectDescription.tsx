import styled from "styled-components";

import { text36, text16 } from "../../styles/typography";
import { ProjectBorder } from "./ProjectBorder";
import { ProjectTitle } from "./ProjectTitle";
import { InternalButton } from "../../components/buttons/InternalButton";
import { Business } from "../../types/data";

interface ProjectDescriptionProps {
  business: Business;
  projectTitle: string;
  descriptionArray: string[];
  slug: string;
}

const Container = styled.div`
  order: var(--project-description-order, 0);
  display: grid;
  grid-template-columns: min-content 1fr;
  gap: 12px;
  width: 100%;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: start;
  width: 100%;
`;

const Description = styled.div`
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

const ButtonContainer = styled.div`
  width: 240px;
`;

export const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  business,
  projectTitle,
  descriptionArray,
  slug,
}) => {
  const description = descriptionArray.map((para, i) => {
    return <Paragraph key={i}>{para}</Paragraph>;
  });

  return (
    <Container>
      <ProjectBorder />
      <DescriptionContainer>
        <ProjectTitle business={business}>{projectTitle}</ProjectTitle>
        <Description>{description}</Description>
        <ButtonContainer>
          <InternalButton slug={slug}>Project Details</InternalButton>
        </ButtonContainer>
      </DescriptionContainer>
    </Container>
  );
};
