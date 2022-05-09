import { SVGProps } from "../../types/components";

export const ProfileIcon: React.FC<SVGProps> = ({
  width,
  height,
  className,
}) => {
  return (
    <svg
      viewBox="0 0 83 83"
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
      <path id="profile-icon" fill="none" d="M0 0h82.708v82.741H0z" />
      <g
        id="profile"
        style={{ stroke: "var(--resume-icon-stroke-color, #e0e0e0)" }}
      >
        <circle
          style={{ fill: "var(--resume-icon-fill-color, #fff)" }}
          cx="41.252"
          cy="41.361"
          r="37"
          strokeWidth="6.25"
        />
        <ellipse
          cx="41.252"
          cy="29.197"
          rx="13.21"
          ry="13.204"
          fill="none"
          strokeWidth="3.96"
        />
        <path
          d="M20.796 72.556a20.847 20.847 0 0 1-.313-3.61c0-11.463 9.306-20.769 20.769-20.769s20.77 9.306 20.77 20.769c0 1.247-.111 2.469-.322 3.656"
          fill="none"
          strokeWidth="4.17"
        />
      </g>
    </svg>
  );
};
