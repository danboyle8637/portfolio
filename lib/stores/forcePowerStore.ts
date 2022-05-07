import create, { SetState } from "zustand";

import { updateSliderOptions } from "../../src/utils/utilityFunctions";
import {
  SliderInput,
  SliderRadioOption,
  UpdateValueFunction,
} from "../../src/types/forms";

type ForcePowerState = {
  twoOptionToggle: SliderInput;
  updateToggleValue: UpdateValueFunction;
};

const twoCricuitsOptions: SliderRadioOption[] = [
  {
    id: 0,
    name: "marketing_power",
    value: 0,
    label: "Marketer",
    isSelected: true,
  },
  {
    id: 1,
    name: "dev_power",
    value: 1,
    label: "Developer",
    isSelected: false,
  },
];

export const forcePowerStore = create<ForcePowerState>(
  (set: SetState<ForcePowerState>) => ({
    twoOptionToggle: {
      value: 0,
      options: twoCricuitsOptions,
    },
    updateToggleValue: (event) =>
      set((state) => {
        const value = Number(event.target.value);
        const name = event.target.name;

        switch (name) {
          case "forcePower": {
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
