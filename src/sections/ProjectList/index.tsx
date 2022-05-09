import styled from "styled-components";

import { ProjectListing } from "../ProjectListing";
import { Project } from "../../types/data";
import { ImagePosition } from "../../types/components";

interface ProjectListProps {
  projects: Project[];
}

const Container = styled.section`
  padding: 120px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 120px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
`;

export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const projectList = projects.map((project, i) => {
    const {
      id,
      business,
      category,
      title,
      description,
      slug,
      projectUrl,
      gitHubUrl,
      technologies,
      imageUrl,
      altTag,
      titleTag,
      imageOrientation,
    } = project;

    const imagePosition: ImagePosition = i % 2 === 0 ? "left" : "right";

    return (
      <ProjectListing
        key={id}
        business={business}
        title={title}
        description={description}
        slug={slug}
        projectUrl={projectUrl}
        gitHubUrl={gitHubUrl}
        technologies={technologies}
        imagePosition={imagePosition}
        imageOrientation={imageOrientation}
        imageUrl={imageUrl}
        altTag={altTag}
        titleTag={titleTag}
      />
    );
  });

  return <Container>{projectList}</Container>;
};
