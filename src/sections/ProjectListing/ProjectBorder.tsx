import styled from "styled-components";

import { ProjectIcon } from "../../components/svgs/ProjectIcon";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content 1fr;
  gap: 12px;
  justify-items: center;
  width: 40px;
`;

const Icon = styled(ProjectIcon)`
  width: 40px;
`;

const DashedLine = styled.div`
  width: 3px;
  background-image: linear-gradient(
    var(--resume-icon-stroke-color, #e0e0e0) 43%,
    rgba(255, 255, 255, 0) 0%
  );
  background-size: 3px 14px;
  height: 100%;
`;

export const ProjectBorder = () => {
  return (
    <Container>
      <Icon />
      <DashedLine />
    </Container>
  );
};
