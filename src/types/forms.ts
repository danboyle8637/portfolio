export interface SliderInput {
  value: number;
  options: SliderRadioOption[];
}

export interface SliderRadioOption {
  id: number;
  name: string;
  value: number;
  label: string;
  isSelected: boolean;
}

export type UpdateValueFunction = (
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
) => void;
