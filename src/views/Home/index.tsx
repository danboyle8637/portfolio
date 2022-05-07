import styled from "styled-components";

import { Header } from "../../sections/HomeHeader";
import { HomeToggleExperience } from "../../sections/HomeToggleExperience";
import { ProjectList } from "../../sections/ProjectList";

const ViewContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const HomeView = () => {
  return (
    <ViewContainer>
      <Header />
      <HomeToggleExperience />
      <ProjectList />
    </ViewContainer>
  );
};
