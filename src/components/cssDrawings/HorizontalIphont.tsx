import styled from "styled-components";

interface IphoneShellProps {
  width: number;
}

const IphoneContainer = styled.div`
  position: relative;
  width: var(--iphone-width);
  isolation: isolate;
  aspect-ratio: 570.24 / 286.08;
`;

const IphoneBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: calc(var(--iphone-width) / 47.3);
  background-color: var(--phone-body-background, var(--section-background-5));
  border-radius: calc(var(--iphone-width) / 15.7667);
  width: 100%;
  box-shadow: 0 6px 8px 1px rgba(0, 0, 0, 0.3);
`;

const ScreenLight = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  right: 12px;
  bottom: 12px;
  background-color: var(--screen-light-background, var(--primary-background));
  border-radius: calc(var(--iphone-width) / 24.7667);
`;

const ScreenDark = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background-color: var(--screen-dark-background, var(--section-background-5));
  border-radius: calc(var(--iphone-width) / 29.7667);
  overflow: hidden;
`;

const TheNotchLight = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  background-color: var(--notch-light-background, var(--primary-background));
  border-radius: calc(var(--iphone-width) / 40) 0 0
    calc(var(--iphone-width) / 40);
  width: 30px;
  height: calc(var(--iphone-width) * 0.2);
  transform: translateY(-50%);
  z-index: 2;
`;

const TheNotchDark = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  background-color: var(--notch-dark-background, var(--section-background-5));
  border-radius: calc(var(--iphone-width) / 60) 0 0
    calc(var(--iphone-width) / 60);
  width: 24px;
  height: calc(var(--iphone-width) * 0.17);
  transform: translateY(-50%);
  z-index: 2;
`;

const ScreenGlare = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-top: calc(var(--iphone-width) / 2.30170316) solid
    rgba(255, 255, 255, 0.01);
  border-left: calc(var(--iphone-width) - 20px) solid transparent;
  z-index: 2;
`;

export const HorizontalIphone: React.FC<IphoneShellProps> = ({
  width,
  children,
}) => {
  const style = {
    "--iphone-width": `${width}px`,
    "--screen-light-background": "var(--background)",
    "--notch-light-background": "var(--background)",
  } as React.CSSProperties;

  return (
    <IphoneContainer style={style}>
      <IphoneBody>
        <ScreenLight>
          <ScreenDark>
            <ScreenGlare />
            {children}
          </ScreenDark>
          <TheNotchLight />
          <TheNotchDark />
        </ScreenLight>
      </IphoneBody>
    </IphoneContainer>
  );
};
