import styled from "styled-components";

import { MyName } from "./MyName";
import { ContactInfo } from "./ContactInfo";
import { sizes } from "../../styles/sizes";

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: var(--section-background-5);
  width: 100%;
`;

const ContentContainer = styled.div`
  padding: 160px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 80px;
  justify-items: center;
  width: 100%;
  max-width: 1200px;
  ${sizes.aboveMobile} {
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`;

export const Header = () => {
  return (
    <Container>
      <ContentContainer>
        <MyName />
        <ContactInfo />
      </ContentContainer>
    </Container>
  );
};
