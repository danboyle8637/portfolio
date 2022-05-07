import styled from "styled-components";

interface VerticalIphoneProps {
  width: number;
}

const IphoneContainer = styled.div`
  position: relative;
  width: var(--iphone-width);
  aspect-ratio: 286.08 / 570.24;
  isolation: isolate;
`;

const IphoneBody = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: calc(var(--iphone-width) / 47.3);
  background-color: var(--phone-body-background, var(--section-background-5));
  border-radius: calc(var(--iphone-width) / 8.7667);
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
  border-radius: calc(var(--iphone-width) / 14.7667);
`;

const ScreenDark = styled.div`
  position: absolute;
  top: 6px;
  left: 6px;
  right: 6px;
  bottom: 6px;
  background-color: var(--screen-dark-background, var(--section-background-5));
  border-radius: calc(var(--iphone-width) / 18.7667);
  overflow: hidden;
  isolation: isolate;
`;

const TheNotchLight = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background: var(--notch-light-background, var(--primary-background));
  border-radius: 0 0 calc(var(--iphone-width) / 20)
    calc(var(--iphone-width) / 20);
  width: calc(var(--iphone-width) * 0.4);
  height: 30px;
  transform: translateX(-50%);
  z-index: 2;
`;

const TheNotchDark = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  background: var(--notch-dark-background, var(--section-background-5));
  border-radius: 0 0 calc(var(--iphone-width) / 28)
    calc(var(--iphone-width) / 28);
  width: calc(var(--iphone-width) * 0.36);
  height: 24px;
  transform: translateX(-50%);
  z-index: 2;
`;

const Screen = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
`;

const ScreenGlare = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
  border-bottom: calc((var(--iphone-width) * 570.24) / 286.08) solid transparent;
  border-right: calc(var(--iphone-width) - 20px) solid rgba(255, 255, 255, 0.01);
  z-index: 2;
`;

export const VerticalIphone: React.FC<VerticalIphoneProps> = ({
  width,
  children,
}) => {
  const styles = {
    "--iphone-width": `${width}px`,
    "--screen-light-background": "var(--background)",
    "--notch-light-background": "var(--background)",
  } as React.CSSProperties;

  return (
    <IphoneContainer style={styles}>
      <IphoneBody>
        <ScreenLight>
          <ScreenDark>
            <Screen>{children}</Screen>
            <ScreenGlare />
          </ScreenDark>
          <TheNotchLight />
          <TheNotchDark />
        </ScreenLight>
      </IphoneBody>
    </IphoneContainer>
  );
};
