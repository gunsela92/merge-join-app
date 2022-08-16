import styled from "styled-components";

export const NotesWrapper = styled.div`
  width: calc(100% - 100px);
  margin: 0 auto;
  display: block;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  align-items: center;
  padding: 20px 100px;
  box-sizing: border-box;
  @media only screen and (max-width: 1800px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media only screen and (max-width: 1600px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const NotesContainer = styled.div`
  background: ${({theme}) => theme.backgrounds.greyBackground};
  width: 300px;
  height: 270px;
  margin-bottom: 10px;
  position: relative;
  display: block;
  float: left;
  margin-left: 10px;
  border-radius: 10px;
  overflow: hidden;
  transition: all .3s;
  &:hover {
    transform: translate(0px, -10px);
    transition: all .3s;
    -webkit-box-shadow: 0px 13px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 13px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 13px 5px 0px rgba(0,0,0,0.75);
  }
`;

export const NotesPictureContainer = styled.img`
  margin: auto;
  height: 170px;
  width: 300px;
`;

export const NotesTimeContainer = styled.div`
  height: 10%;
  text-align: left;
  color: ${({theme}) => theme.colors.orangeColor};
  padding: 5px 10px 10px;
  box-sizing: border-box;
  font-family: ${({theme}) => theme.fonts.regular};
`;

export const NotesIdContainer = styled.div`
  height: 10%;
  text-align: left;
  padding: 5px 10px 10px;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes.large}
`;
