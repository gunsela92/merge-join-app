import styled from "styled-components";
import {Tabs, TabPanel, TabList} from '@chakra-ui/react'

export const NotesTabs = styled(Tabs)`
  width: 100%;
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const NotesWrapper = styled(TabPanel)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
  justify-items: center;
  align-items: center;
  padding: 20px 0 !important;
  box-sizing: border-box;
  cursor: pointer;

  @media only screen and (max-width: 1400px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NotesTabList = styled(TabList)`
  background-color: ${({theme}) => theme.backgrounds.wantedBackground};
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  @media only screen and (max-width: 600px) {
    padding: 0 10px;
  }
`;

export const NotesContainer = styled.div`
  background: ${({theme}) => theme.backgrounds.inputBackground};
  width: 100%;
  max-width: 400px;
  max-height: 520px;
  height: 100%;
  margin-bottom: 10px;
  position: relative;
  display: block;
  float: left;
  border-radius: 5px;
  overflow: hidden;
  transition: all .3s;

  &:hover {
    transform: translate(0px, -10px);
    transition: all .3s;
    -webkit-box-shadow: 0px 13px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 13px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 13px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;

export const NotesPictureContainer = styled.img`
  margin: auto;
  height: auto;
  width: 100%;
`;

export const NotesTimeContainer = styled.div`
  height: 40px;
  text-align: left;
  color: ${({theme}) => theme.colors.orangeColor};
  padding: 5px 10px 10px;
  box-sizing: border-box;
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: ${({theme}) => theme.fontSizes.extraLarge};
`;

export const NotesIdContainer = styled.div`
  height: 100px;
  text-align: left;
  padding: 5px 10px 10px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes.medium};
  box-sizing: border-box;
`;
