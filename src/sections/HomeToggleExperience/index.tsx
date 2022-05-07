import styled from "styled-components";

import { text36 } from "../../styles/typography";
import { TwoOptionToggle } from "../../components/forms/ToggleSwitch";
import { forcePowerStore } from "../../../lib/stores/forcePowerStore";

const Container = styled.section`
  padding: 120px 12px;
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  gap: 40px;
  justify-items: center;
  width: 100%;
`;

const Headline = styled.h2`
  ${text36}
  font-weight: 200;
  letter-spacing: 0.6rem;
  text-transform: uppercase;
`;

export const HomeToggleExperience = () => {
  const { value, options, updateInputValue } = forcePowerStore((state) => ({
    value: state.twoOptionToggle.value,
    options: state.twoOptionToggle.options,
    updateInputValue: state.updateToggleValue,
  }));

  return (
    <Container>
      <Headline>experience</Headline>
      <TwoOptionToggle
        name="forcePower"
        value={value}
        options={options}
        updateToggleValue={updateInputValue}
      />
    </Container>
  );
};
