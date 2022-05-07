import styled from "styled-components";

import { ContactInfoCard } from "../../components/cards/ContactInfoCard";

const Container = styled.div`
  width: 290px;
`;

export const ContactInfo = () => (
  <Container>
    <ContactInfoCard />
  </Container>
);
