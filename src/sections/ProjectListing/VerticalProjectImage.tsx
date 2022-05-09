import styled from "styled-components";

import { text20 } from "../../styles/typography";
import { VerticalIphone } from "../../components/cssDrawings/VerticalIphone";
import { ProjectListingImage } from "../../components/images/ProjectListingImage";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { sizes } from "../../styles/sizes";

interface ProjectImageProps {
  projectTitle: string;
  imageUrl: string;
  altTag: string;
  titleTag: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 12px;
  width: 100%;
  ${sizes.aboveMobile} {
    justify-self: var(--project-image-justify, start);
    display: inline;
    width: fit-content;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const ProjectTitle = styled.h2`
  ${text20}
  font-weight: 400;
  width: 100%;
  white-space: nowrap;
  transform: rotate(-90deg);
`;

export const VerticalProjectImage: React.FC<ProjectImageProps> = ({
  projectTitle,
  imageUrl,
  altTag,
  titleTag,
}) => {
  const isAboveMobile = useMatchMedia();

  return (
    <Container>
      {isAboveMobile ? null : (
        <TitleContainer>
          <div />
          <ProjectTitle>{projectTitle}</ProjectTitle>
        </TitleContainer>
      )}
      <VerticalIphone width={300}>
        <ProjectListingImage
          orientation="vertical"
          imageUrl={imageUrl}
          altTag={altTag}
          titleTag={titleTag}
        />
      </VerticalIphone>
    </Container>
  );
};
