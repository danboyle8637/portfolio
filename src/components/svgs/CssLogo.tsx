import { SVGProps } from "../../types/components";

export const CssLogo: React.FC<SVGProps> = ({ width, height, className }) => {
  return (
    <svg
      viewBox="0 0 248 282"
      width={width}
      height={height}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
    >
      <path id="Artboard1" fill="none" d="M0 0h247.35v281.595H0z" />
      <path
        style={{ fill: "var(--shield-color, #2299f8)" }}
        id="badge"
        d="m220.056 251.134-95.715 26.761a4.017 4.017 0 0 1-2.191 0l-95.199-27.097a4.04 4.04 0 0 1-2.91-3.522L2.663 7.349a4.263 4.263 0 0 1-.016-.357c0-2.212 1.821-4.032 4.033-4.032H239.85c2.212 0 4.033 1.82 4.033 4.032 0 .117-.005.234-.016.35l-20.834 240.263a4.04 4.04 0 0 1-2.977 3.529Z"
        fillRule="nonzero"
      />
      <path
        style={{ fill: "var(--css-color, var(--base-text-color))" }}
        id="three"
        d="M196.171 53.21H49.987a2.701 2.701 0 0 0-2.685 2.816l1.115 23.2a2.7 2.7 0 0 0 2.689 2.554h112.467a2.7 2.7 0 0 1 2.684 2.836l-1.344 25.122a2.7 2.7 0 0 1-2.688 2.54H55.077a2.702 2.702 0 0 0-2.674 2.957l2.48 24.571a2.698 2.698 0 0 0 2.688 2.42h101.71l.017-.001a2.702 2.702 0 0 1 2.671 2.985l-4.139 37.501a2.695 2.695 0 0 1-1.97 2.298l-31.943 8.697c-.458.121-.94.121-1.398 0l-31.499-8.388a2.694 2.694 0 0 1-2.017-2.392l-1.592-20.888a2.7 2.7 0 0 0-2.689-2.487H59.849a2.702 2.702 0 0 0-2.681 2.884l3.225 44.403a2.695 2.695 0 0 0 1.97 2.399l60.062 16.6c.47.135.968.135 1.438 0l59.875-16.606a2.695 2.695 0 0 0 1.962-2.359l13.045-150.725a2.701 2.701 0 0 0-2.574-2.937Z"
        fillRule="nonzero"
      />
    </svg>
  );
};
