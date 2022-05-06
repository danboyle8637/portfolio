import create, { SetState } from "zustand";

import { updateSliderOptions } from "../../src/utils/utilityFunctions";
import {
  SliderInput,
  SliderRadioOption,
  UpdateValueFunction,
} from "../../src/types/forms";

type AssessmentTrackingStore = {
  twoOptionToggle: SliderInput;
  updateToggleValue: UpdateValueFunction;
};

const twoCricuitsOptions: SliderRadioOption[] = [
  {
    id: 0,
    name: "marketing_nerd",
    value: 0,
    label: "Marketing Nerd",
    isSelected: true,
  },
  {
    id: 1,
    name: "dev_nerd",
    value: 1,
    label: "Dev Nerd",
    isSelected: false,
  },
];

export const assessmentTrackingStore = create<AssessmentTrackingStore>(
  (set: SetState<AssessmentTrackingStore>) => ({
    twoOptionToggle: {
      value: 0,
      options: twoCricuitsOptions,
    },
    updateToggleValue: (event) =>
      set((state) => {
        const value = Number(event.target.value);
        const name = event.target.name;

        switch (name) {
          case "twoCircuits": {
            const optionsCopy = [...state.twoOptionToggle.options];
            const updatedOptions = updateSliderOptions(optionsCopy, value);

            return {
              ...state,
              twoOptionToggle: {
                value: value,
                options: updatedOptions,
              },
            };
          }
          default: {
            return state;
          }
        }
      }),
  })
);
