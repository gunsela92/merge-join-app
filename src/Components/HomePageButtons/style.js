import styled from "styled-components";
import MergeRP from "../../assets/icons/MergeBackgroundIcon.jpg"
import {Button} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";

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

export const Bar = styled.nav`
  font-size: 18px;
  background: ${({theme}) => theme.backgrounds.inputBackground};
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding-bottom: 10px;
  @media (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    padding-bottom: 0;
    height: 70px;
    align-items: center;
  }
`
export const MainNav = styled.ul`
  list-style-type: none;
  display: ${props => props.display};
  height: ${props => props.display === "flex" ? "100vh" : "unset"};
  flex-direction: column;
  @media (min-width: 768px) {
    display: flex !important;
    margin-right: 30px;
    flex-direction: row;
    justify-content: flex-end;
  }
`
export const NavLi = styled.li`
  text-align: center;
  margin: 15px auto;
`
export const NavLink = styled(Button)`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: ${({theme}) => theme.fontSizes.small};
  @media (min-width: 768px) {
    margin: 0 10px;
  }
`
export const Logo = styled.img`
  display: inline-block;
  font-size: 22px;
  margin-left: 20px;
`
export const NavBarToggle = styled.span`
  position: absolute;
  right: 20px;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.8);
  font-size: 24px;
`
export const Hamburger = styled(HamburgerIcon)`
  @media (min-width: 768px) {
    display: none !important;
  }
`