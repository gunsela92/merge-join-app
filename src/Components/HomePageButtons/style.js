import styled from "styled-components";
import MergeRP from "../../assets/icons/MergeBackgroundIcon.jpg"

export const AppContainer = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  background-image: url(${MergeRP});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: normal;
`;

export const PanelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 0 50px;
  padding-top: 40px;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 0 20px;
    padding-top: 0;
    height: 65%;
  }
`;

export const LeftPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;
export const TeamSpeakContainer = styled.img`
  height: 100%;
  width: 100%;
  max-height: 150px;
  max-width: 150px;
  border-radius: 50%;
  object-fit: cover;

  &:hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    opacity: 0.7;
  }
;

  @media only screen and (max-width: 900px) {
    max-height: 100px;
    max-width: 100px;
  }
  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      width: 450px;
      height: 450px;
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

export const RightPanelContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

export const FivemContainer = styled.img`
  height: 100%;
  width: 100%;
  max-height: 150px;
  max-width: 150px;
  border-radius: 50%;
  object-fit: cover;

  &:hover {
    animation: shake 0.5s;
    animation-iteration-count: infinite;
    opacity: 0.7;
  }

  @media only screen and (max-width: 900px) {
    max-height: 100px;
    max-width: 100px;
  }

  @keyframes shake {
    0% {
      transform: translate(1px, 1px) rotate(0deg);
    }
    10% {
      transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      transform: translate(3px, 2px) rotate(0deg);
    }
    40% {
      transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      transform: translate(3px, 1px) rotate(-1deg);
    }
    80% {
      transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      transform: translate(1px, 2px) rotate(0deg);
    }
    100% {
      transform: translate(1px, -2px) rotate(-1deg);
    }
  }
`;

export const DownPanelContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: flex-start;
  line-height: 2.5;
`;







