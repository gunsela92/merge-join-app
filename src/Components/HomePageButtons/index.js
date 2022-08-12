import React, {useEffect, useState} from 'react';
import axios from "axios";
import customProtocolVerify from "custom-protocol-detection";
import {Button} from "@chakra-ui/react";
import CustomModal from "../Modal";
import TeamSpeakImg from "../../assets/icons/TeamSpeakBackgroundPic.png"
import FivemImg from "../../assets/icons/FivemLogo.png"
import {PanelContainer, LeftPanelContainer, RightPanelContainer, FivemContainer, TeamSpeakContainer} from "./style";

const HomePageButtons = () => {
    const [data, setData] = useState({teamspeak: "", fivem: ""});
    const [errorPopup, setErrorPopup] = useState({show: false, message: "", appName: null});
    const [successPopup, setSuccessPopup] = useState({show: false, appName: ""});
    const [popupAction, setPopupAction] = useState(null);

    const fetchServerData = async () => {
        try {
            const res = await axios.post("https://apiv1.mergeroleplay.com/tracer/getserverinfo");
            if (res?.data) {
                console.log(res?.data)
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
        customProtocolVerify(url, (res) => {
                setErrorPopup({show: true, message: "Uygulama bulunamadı. Yüklemek ister misiniz ?", appName: appName});
            },
            (res) => {
                setSuccessPopup({show: true, appName: appName});
            }, () => {
                setErrorPopup({show: true, message: "No browser support", appName: null});
            }, 500
        );
    }

    const closePopups = () => {
        setErrorPopup({show: false, message: "", appName: null});
        setSuccessPopup({show: false, appName: ""});
        setPopupAction(null);
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

    return (
        <PanelContainer>
            <LeftPanelContainer
                onClick={() => redirect(data.teamspeak, "teamspeak")}>
              <TeamSpeakContainer src={TeamSpeakImg}/>
            </LeftPanelContainer>
            <RightPanelContainer
                onClick={() => redirect(data.fivem, "fivem")}>
                <FivemContainer src={FivemImg}/>
            </RightPanelContainer>
            <CustomModal title={"Uyarı"} isOpen={errorPopup.show} onClose={closePopups}
                         onAction={() => errorPopup.appName ? redirectToExternalPage(errorPopup.appName) : null}
                         actionText={errorPopup.appName && "Yükle"}>
                <div>{errorPopup.message}</div>
            </CustomModal>
        </PanelContainer>
    );
};

export default HomePageButtons;
