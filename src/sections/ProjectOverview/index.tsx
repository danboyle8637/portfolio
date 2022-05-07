import styled from "styled-components";

import { VerticalIphone } from "../../components/cssDrawings/VerticalIphone";
import { IphonePlaceholder } from "../../components/images/IphonePlaceholder";
import { ProjectDescription } from "./ProjectDescription";
import { sizes } from "../../styles/sizes";

import { ExternalButton } from "../../components/buttons/ExternalButton";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    grid-template-columns: min-content 1fr;
  }
`;

const ImageContainer = styled.div`
  width: 300px;
`;

export const ProjectOverview = () => {
  const headline = "Project 1";

  const description = [
    "This is a marketing and content site. This site was built with NextJS and it's fully static.",
    "I wanted to learn Cloudflare Workers so the mini-backend that supports it is build with Workers.",
  ];

  return (
    <Container>
      <ImageContainer>
        <VerticalIphone width={300}>
          <IphonePlaceholder />
        </VerticalIphone>
      </ImageContainer>
      <ProjectDescription
        projectTitle={headline}
        descriptionArray={description}
      />
      <ExternalButton url="">Git Hub</ExternalButton>
    </Container>
  );
};
