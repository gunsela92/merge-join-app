import React, {useEffect, useState} from 'react';
import axios from "axios";
import customProtocolVerify from "custom-protocol-detection";
import CustomModal from "../Modal";
import {
  DownPanelContainer,
  AppContainer, NavBarToggle, Bar, Hamburger, Logo, MainNav, NavLi, NavLink,
} from "./style";
import HomePagePatchNotes from "../HomePagePatchNotes";

const HomePageButtons = () => {
  const [data, setData] = useState({teamspeak: "", fivem: ""});
  const [errorPopup, setErrorPopup] = useState({show: false, message: "", appName: null});
  const [successPopup, setSuccessPopup] = useState({show: false, appName: ""});
  const [displayNav, setDisplayNav] = useState("none");

  const fetchServerData = async () => {
    try {
      const res = await axios.post("https://apiv1.mergeroleplay.com/tracer/getserverinfo");
      if (res?.data) {
        setData(res.data);
      }
    } catch (e) {
      return e;
    }
  }

  useEffect(() => {
    fetchServerData();
  }, []);

  const redirect = (url, appName) => {
    console.log(url)
    customProtocolVerify(url, (res) => {
          setErrorPopup({show: true, message: "Uygulama bulunamadı. Yüklemek ister misiniz ?", appName: appName});
        },
        (res) => {
          setSuccessPopup({show: true, message: "Uygulama başlatılıyor.", appName: appName});
        }, () => {
          setErrorPopup({show: true, message: "Kullanmakta olduğunuz tarayıcı desteklenmiyor.", appName: null});
        }, 500
    );
  }

  const closePopups = () => {
    setErrorPopup({show: false, message: "", appName: null});
    setSuccessPopup({show: false, appName: ""});
  }

  const redirectToExternalPage = (appName) => {
    if (appName) {
      if (appName === "teamspeak") {
        window.location.href = "https://files.teamspeak-services.com/releases/client/3.5.6/TeamSpeak3-Client-win64-3.5.6.exe";
      } else if (appName === "fivem") {
        window.location.href = "https://fivem.net/";
      }
    }
  }

  const toggleNavBar = () => {
    switch (displayNav) {
      case 'none':
        setDisplayNav('flex');
        break
      case 'flex':
        setDisplayNav('none');
        break
      default:
        setDisplayNav('none');
        return
    }
  }

  return (
      <AppContainer>
        <Bar>
          <NavBarToggle onClick={toggleNavBar}>
            <Hamburger/>
          </NavBarToggle>
          <Logo src={"https://store.mergeroleplay.com/image/catalog/xxxx.png"}/>
          <MainNav display={displayNav}>
            <NavLi>
              <NavLink onClick={() => redirect(data.fivem, "fivem")}>Oyuna gir</NavLink>
            </NavLi>
            <NavLi>
              <NavLink onClick={() => redirect(data.teamspeak, "teamspeak")}>Teamspeak</NavLink>
            </NavLi>
            <NavLi>
              <NavLink onClick={() => redirect(data.teamspeakEu, "teamspeak")}>Teamspeak (Yurtdışı)</NavLink>
            </NavLi>
          </MainNav>
        </Bar>
        <CustomModal title={"Uyarı"} isOpen={errorPopup.show} onClose={closePopups}
                     onAction={() => errorPopup.appName ? redirectToExternalPage(errorPopup.appName) : null}
                     actionText={errorPopup.appName && "Yükle"}>
          <div>{errorPopup.message}</div>
        </CustomModal>
        <CustomModal title={"Uyarı"} isOpen={successPopup.show} onClose={closePopups}>
          <div>{successPopup.message}</div>
        </CustomModal>
        <DownPanelContainer>
          <HomePagePatchNotes/>
        </DownPanelContainer>
      </AppContainer>
  );
};

export default HomePageButtons;
