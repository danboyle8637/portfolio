import styled from "styled-components";

import { ProjectOverview } from "../ProjectOverview";

const Container = styled.section`
  padding: 120px 12px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ProjectList = () => {
  return (
    <Container>
      <ProjectOverview />
    </Container>
  );
};
