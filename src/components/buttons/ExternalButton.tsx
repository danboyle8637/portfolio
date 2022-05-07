import styled from "styled-components";

interface ExternalButtonProps {
  url: string;
}

const Button = styled.a`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 700;
  color: var(--button-label-color, var(--base-text-color));
  text-transform: capitalize;
  text-decoration: none;
  background-color: var(--button-background-color, var(--section-background-2));
  border-radius: 12px;
  border: none;
  outline: none;
  width: 100%;
  height: var(--button-height, 50px);
  cursor: var(--button-cursor, pointer);
  box-shadow: var(--button-box-shadow, none);
  transition: background-color, box-shadow, 300ms ease-in-out;
  &:focus {
    box-shadow: 0 4px 2px 0px rgba(0, 0, 0, 0.4),
      0 0 0 2px var(--primary-background),
      0 0 0 5px var(--button-hover, var(--accent-2));
  }
  &:hover {
    box-shadow: 0 4px 2px 0px rgba(0, 0, 0, 0.4),
      0 0 0 2px var(--primary-background),
      0 0 0 5px var(--button-hover, var(--accent-2));
  }
`;

export const ExternalButton: React.FC<ExternalButtonProps> = ({
  url,
  children,
}) => {
  return (
    <Button href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </Button>
  );
};
