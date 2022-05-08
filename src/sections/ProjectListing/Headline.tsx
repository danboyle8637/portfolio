import styled from "styled-components";

import { text36, text24 } from "../../styles/typography";
import { Business } from "../../types/data";

interface HeadlineProps {
  business: Business;
}

const Container = styled.h1`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 12px;
  justify-items: start;
  width: 100%;
`;

const BusinessHeadline = styled.span`
  ${text24}
  color: var(--base-text-color);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.34rem;
`;

const PowerHeadline = styled.span`
  ${text36}
  font-weight: 700;
  text-transform: uppercase;
  color: var(--base-text-color);
`;

export const Headline: React.FC<HeadlineProps> = ({ business, children }) => {
  const businessHeadline =
    business === "fww" ? "fit women's weekly" : "this time fitness";

  return (
    <Container>
      <BusinessHeadline>{businessHeadline}</BusinessHeadline>
      <PowerHeadline>{children}</PowerHeadline>
    </Container>
  );
};
