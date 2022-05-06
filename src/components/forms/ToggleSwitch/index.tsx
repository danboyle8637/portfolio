import React, { useEffect, useRef } from "react";
import styled from "styled-components";

import { ToggleOption } from "./ToggleOption";
import {
  largeToggleSwithWithWordsOnAni,
  largeToggleSwithWithWordsOffAni,
} from "../../../animations/forms";
import { SliderRadioOption, UpdateValueFunction } from "../../../types/forms";

interface TwoOptionToggleProps {
  name: string;
  options: SliderRadioOption[];
  value: number;
  updateToggleValue: UpdateValueFunction;
}

const ToggleContainer = styled.div`
  --switch-width: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--switch-background-color);
  border-radius: 16px;
  width: var(--switch-width);
  height: calc(var(--switch-width) / 5);
  box-shadow: 0 0 0 4px var(--switch-box-shadow);
  transition: box-shadow 300ms ease-in-out;
  isolation: isolate;
  overflow: hidden;
  &:hover {
    box-shadow: 0 0 0 4px var(--switch-active-inner-shadow),
      0 0 0 6px var(--switch-active-outter-shadow);
  }
`;

const Knob = styled.span`
  position: absolute;
  top: 50%;
  left: 8px;
  background: var(--switch-knob-color);
  border-radius: 10px;
  width: calc(var(--switch-width) / 2);
  height: 44px;
`;

const SwitchOptionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 12px;
  display: flex;
  z-index: 1;
`;

export const TwoOptionToggle: React.FC<TwoOptionToggleProps> = ({
  name,
  options,
  value,
  updateToggleValue,
}) => {
  const knobRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const knob = knobRef.current;
    const xDistance = 150 - 16;

    if (knob && value === 0) {
      largeToggleSwithWithWordsOffAni(knob);
    }

    if (knob && value === 1) {
      largeToggleSwithWithWordsOnAni(knob, xDistance);
    }
  }, [value]);

  const toggleOptions = options.map((option) => {
    const id = option.id;
    const value = option.value;
    const label = option.label;
    const isSelected = option.isSelected;

    return (
      <ToggleOption
        key={id}
        name={name}
        value={value}
        label={label}
        isSelected={isSelected}
        updateToggleValue={updateToggleValue}
      />
    );
  });

  return (
    <ToggleContainer>
      <SwitchOptionContainer>{toggleOptions}</SwitchOptionContainer>
      <Knob ref={knobRef} />
    </ToggleContainer>
  );
};
