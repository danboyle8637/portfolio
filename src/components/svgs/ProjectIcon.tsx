import { SVGProps } from "../../types/components";

export const ProjectIcon: React.FC<SVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 83 84"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="1.5"
    >
      <path id="project-icon" fill="none" d="M0 0h82.254v83.149H0z" />
      <g
        id="project"
        style={{
          stroke: "var(--resume-icon-stroke-color, #e0e0e0)",
        }}
      >
        <circle
          style={{ fill: "var(--resume-icon-fill-color, #fff)" }}
          cx="41.055"
          cy="41.508"
          r="37"
          strokeWidth="6.25"
        />
        <g id="briefcase">
          <path
            style={{ fill: "var(--resume-icon-fill-color, #fff)" }}
            d="M62.555 34.144a4.476 4.476 0 0 0-4.476-4.476H24.031a4.476 4.476 0 0 0-4.476 4.476v19.047a4.477 4.477 0 0 0 4.476 4.477h34.048a4.477 4.477 0 0 0 4.476-4.477V34.144Z"
            strokeWidth="4.17"
          />
          <path
            d="M51.055 29.668v-5.019a2.98 2.98 0 0 0-2.981-2.981H34.036a2.98 2.98 0 0 0-2.981 2.981v5.019"
            fill="none"
            strokeWidth="4.17"
          />
          <path d="M19.555 41.668h43" fill="none" strokeWidth="2.29" />
          <path d="M31.055 39.168v5" fill="none" strokeWidth="4.17" />
          <path d="M51.055 39.168v5" fill="none" strokeWidth="4.17" />
        </g>
      </g>
    </svg>
  );
};
