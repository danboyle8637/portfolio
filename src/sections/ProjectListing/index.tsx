import { CSSProperties } from "react";
import styled from "styled-components";

import { ProjectDescription } from "./ProjectDescription";
import { VerticalProjectImage } from "./VerticalProjectImage";
import { HorizontalProjectImage } from "./HorizontalProjectImage";
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

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    flex-direction: row;
    gap: 40px;
  }
`;

const HorizontalContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
  max-width: 800px;
  ${sizes.aboveMobile} {
    justify-self: start;
    width: 600px;
  }
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

  const projectListStyles = {
    "--project-image-justify":
      imagePosition === "left" && isAboveMobile ? "end" : "start",
    "--project-description-order":
      imagePosition === "left" && isAboveMobile ? 1 : 0,
  } as CSSProperties;

  const verticalListing = (
    <VerticalContainer style={projectListStyles}>
      <ProjectDescription
        business={business}
        projectTitle={title}
        descriptionArray={description}
        slug={slug}
      />
      <VerticalProjectImage
        projectTitle={title}
        imageUrl={imageUrl}
        altTag={altTag}
        titleTag={titleTag}
      />
    </VerticalContainer>
  );

  const horizontalListing = (
    <HorizontalContainer>
      <ProjectDescription
        business={business}
        projectTitle={title}
        descriptionArray={description}
        slug={slug}
      />
      <HorizontalProjectImage
        projectTitle={title}
        imageUrl={imageUrl}
        altTag={altTag}
        titleTag={titleTag}
      />
    </HorizontalContainer>
  );

  return (
    <>{imageOrientation === "vertical" ? verticalListing : horizontalListing}</>
  );
};
