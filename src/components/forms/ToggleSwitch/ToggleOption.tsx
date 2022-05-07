import { CSSProperties } from "react";
import styled from "styled-components";

interface OptionProps {
  name: string;
  value: number;
  label: string;
  isSelected: boolean;
  updateToggleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const OptionLabel = styled.label`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--switch-label-color);
  background-color: transparent;
  outline: none;
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: color 150ms ease-in-out;
`;

const HiddenRadioInput = styled.input.attrs({ type: "radio" })`
  visibility: hidden;
  margin: 0;
  width: 0;
`;

export const ToggleOption: React.FC<OptionProps> = ({
  name,
  value,
  label,
  isSelected,
  updateToggleValue,
}) => {
  const switchLabelOnStyles = {
    "--switch-label-color": "var(--base-text-color)",
  } as CSSProperties;

  const switchLabelOffStyles = {
    "--switch-label-color": "var(--section-background-1)",
  } as CSSProperties;

  const activeStyles = isSelected ? switchLabelOnStyles : switchLabelOffStyles;

  return (
    <>
      <HiddenRadioInput
        type="radio"
        id={`${name}-${value}`}
        name={name}
        value={value}
        checked={isSelected}
        onChange={updateToggleValue}
      />
      <OptionLabel style={activeStyles} htmlFor={`${name}-${value}`}>
        {label}
      </OptionLabel>
    </>
  );
};
