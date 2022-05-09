import styled from "styled-components";

import { text20 } from "../../styles/typography";
import { HorizontalIphone } from "../../components/cssDrawings/HorizontalIphont";
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
  position: relative;
  display: grid;
  grid-template-columns: 36px 1fr;
  gap: 12px;
  width: 100%;
  height: 302px;
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
`;

const IphoneContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;

export const HorizontalProjectImage: React.FC<ProjectImageProps> = ({
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
      <IphoneContainer>
        <HorizontalIphone width={500}>
          <ProjectListingImage
            orientation="horizontal"
            imageUrl={imageUrl}
            altTag={altTag}
            titleTag={titleTag}
          />
        </HorizontalIphone>
      </IphoneContainer>
    </Container>
  );
};
