import styled from "styled-components";
import MergeRPBackground from "../../assets/icons/NewsBackGround.png";
import {Button} from "@chakra-ui/react";

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
  padding: 0 10px;
`;

export const NotesContainer = styled.div`
  border-radius: 50px;
  border: 1px solid white;
  backdrop-filter: blur(5px);
  overflow: hidden;
`;

export const LogoContainer = styled.img`
  margin: auto;
  height: 200px;
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
  justify-content: space-around;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
  border-bottom: 1px solid ${({theme}) => theme.colors.grey};
  margin-bottom: 15px;
`;

export const NewsContainer = styled.div`
  height: 200px;
  width: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: ${({theme}) => theme.fonts.regular};
  padding: 10px;
  box-sizing: border-box;
`;

export const TimeContainer = styled.div`
  border-top: 1px solid white;
  height: 60px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const BackButton = styled(Button)`
  width: 100%;
  padding: 15px 0;
  height: 100% !important;

  &:hover {
    background-color: ${({theme}) => theme.colors.infoColor};
  }
`;