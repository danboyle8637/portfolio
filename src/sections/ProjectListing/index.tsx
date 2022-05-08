import { CSSProperties } from "react";
import styled from "styled-components";

import { text36, text16 } from "../../styles/typography";
import { VerticalIphone } from "../../components/cssDrawings/VerticalIphone";
import { HorizontalIphone } from "../../components/cssDrawings/HorizontalIphont";
import { ProjectListingImage } from "../../components/images/ProjectListingImage";
import { Headline } from "./Headline";
import { ProjectDescription } from "./ProjectDescription";
import { InternalButton } from "../../components/buttons/InternalButton";
import { ExternalButton } from "../../components/buttons/ExternalButton";
import { useMatchMedia } from "../../hooks/useMatchMedia";
import { Business, Techology } from "../../types/data";
import { ImageOrientation, ImagePosition } from "../../types/components";
import { sizes } from "../../styles/sizes";

interface ProjectListingProps {
  business: Business;
  title: string;
  description: string[];
  slug: string;
  projectUrl?: string;
  gitHubUrl?: string;
  technologies?: Techology[];
  imagePosition: ImagePosition;
  imageOrientation: ImageOrientation;
  imageUrl: string;
  altTag: string;
  titleTag: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  align-items: center;
  width: 100%;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

const ImageContainer = styled.div`
  order: var(--image-position, 0);
  width: 300px;
`;

const DescriptionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

const CopyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 20px;
  justify-items: start;
  width: 100%;
`;

const Paragraph = styled.p`
  ${text16}
  line-height: 1.6;
`;

const ButtonContainer = styled.div`
  width: 240px;
`;

export const ProjectListing: React.FC<ProjectListingProps> = ({
  business,
  title,
  description,
  slug,
  projectUrl,
  gitHubUrl,
  technologies,
  imagePosition,
  imageOrientation,
  imageUrl,
  altTag,
  titleTag,
}) => {
  const isAboveMobile = useMatchMedia();

  const listingDescription = description.map((para, i) => {
    return <Paragraph key={i}>{para}</Paragraph>;
  });

  const verticalIphoneWidth = isAboveMobile ? 340 : 280;

  const projectImage =
    imageOrientation === "vertical" ? (
      <VerticalIphone width={verticalIphoneWidth}>
        <ProjectListingImage
          imageUrl={imageUrl}
          altTag={altTag}
          titleTag={titleTag}
          orientation={imageOrientation}
        />
      </VerticalIphone>
    ) : (
      <HorizontalIphone width={600}>
        <ProjectListingImage
          imageUrl={imageUrl}
          altTag={altTag}
          titleTag={titleTag}
          orientation={imageOrientation}
        />
      </HorizontalIphone>
    );

  const imageStyles = {
    "--image-position": imagePosition === "left" && isAboveMobile ? 1 : 0,
  } as CSSProperties;

  return (
    <Container>
      {isAboveMobile ? (
        <ImageContainer style={imageStyles}>{projectImage}</ImageContainer>
      ) : null}
      <DescriptionContainer>
        <Headline business={business}>{title}</Headline>
        {!isAboveMobile ? (
          <ImageContainer style={imageStyles}>{projectImage}</ImageContainer>
        ) : null}
        <CopyContainer>{listingDescription}</CopyContainer>
        <ButtonContainer>
          <InternalButton slug={slug}>Project Details</InternalButton>
        </ButtonContainer>
      </DescriptionContainer>
    </Container>
  );
};
