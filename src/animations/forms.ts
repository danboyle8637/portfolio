import { animate, spring } from "motion";

export const largeToggleSwithWithWordsOnAni = (
  knob: HTMLSpanElement,
  xDistance: number
) => {
  animate(
    knob,
    { x: xDistance, y: "-50%" },
    {
      duration: 0.3,
      easing: spring({ velocity: 1000, stiffness: 600, damping: 30 }),
    }
  );
};

export const largeToggleSwithWithWordsOffAni = (knob: HTMLSpanElement) => {
  animate(
    knob,
    { x: 0, y: "-50%" },
    {
      duration: 0.3,
      easing: spring({ velocity: 1000, stiffness: 600, damping: 30 }),
    }
  );
};
