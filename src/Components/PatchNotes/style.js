import styled from "styled-components";
import MergeRPBackground from "../../assets/icons/NewsBackGround.png";

export const PatchContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  background-image: url(${MergeRPBackground});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NotesContainer = styled.div`
  border-radius: 50px;
  border: 1px solid white;
  backdrop-filter: blur(5px)
`;

export const LogoContainer = styled.img`
  margin: auto;
  height: 35vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 900px) {
    max-height: 150px;
    max-width: 150px;
  }
`;

export const IDContainer = styled.div`
  height: 5vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const NewsContainer = styled.div`
  height: 20vh;
  width: 40vw;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TimeContainer = styled.div`
  border-top: 1px solid white;
  height: 5vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;