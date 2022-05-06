import { SliderRadioOption } from "../types/forms";

export const capitalizeName = (name: string) => {
  const nameArray = name.split("");
  const firstChar = nameArray.shift()?.toUpperCase();

  if (firstChar) {
    nameArray.unshift(firstChar);
    const cappedName = nameArray.join("");

    return cappedName;
  } else {
    return "";
  }
};

export const updateSliderOptions = (
  optionsArray: SliderRadioOption[],
  value: number
): SliderRadioOption[] => {
  return optionsArray.map((option) => {
    if (option.value === value) {
      option.isSelected = !option.isSelected;
      return option;
    } else if (option.isSelected) {
      option.isSelected = !option.isSelected;
      return option;
    }
    return option;
  });
};
