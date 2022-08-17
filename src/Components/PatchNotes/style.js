import styled from "styled-components";
import MergeRPBackground from "../../assets/icons/NewsBackGround.png";

export const PatchContainer = styled.div`
  height: 100%;
  width: 100%;
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
  height: 300px;
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
  height: 50px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const NewsContainer = styled.div`
  height: 200px;
  width: 600px;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const TimeContainer = styled.div`
  border-top: 1px solid white;
  height: 50px;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;
