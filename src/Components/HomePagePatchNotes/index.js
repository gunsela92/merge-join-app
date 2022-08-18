import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {
  NotesContainer,
  NotesIdContainer, NotesNotFinished,
  NotesPictureContainer, NotesTabList,
  NotesTabs,
  NotesTimeContainer,
  NotesWrapper
} from "./style";
import {Tab, TabPanels} from '@chakra-ui/react'
import {formatDate} from "../../Utils/dateFormatter";
import Image1 from "../../assets/icons/1.jpg";
import Image2 from "../../assets/icons/2.jpg";
import Image3 from "../../assets/icons/3.jpg";

const HomePagePatchNotes = () => {
  const [updates, setUpdates] = useState([]);
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0);

  const getImage = () => {
    const random = Math.random() * (4 - 1) + 1;
    if (random < 2 && random > 1) {
      return Image1;
    } else if (random < 3 && random > 2) {
      return Image2;
    } else {
      return Image3;
    }
  }

  useEffect(() => {
    PatchNotes();
  }, []);

  const PatchNotes = async () => {
    try {
      const res = await axios.get("https://apiv1.mergeroleplay.com/tracer/announce");
      if (res?.data) {
        setUpdates(res?.data)
      }
    } catch (e) {
      return e;
    }
  }

  const handleTabsChange = (index) => {
    setTabIndex(index)
  }

  return useMemo(() => {
    if (updates?.length > 0) {
      const categories = [...new Set(updates?.map(item => item?.isCompleted ? "Yenilikler" : "Bakım Notları").flat())] || [];
      const searchItem = tabIndex === 0 ? "NEW" : "PATCH";
      const newList = updates?.filter(item => item?.category === searchItem);
      return (
          <NotesTabs index={tabIndex} onChange={handleTabsChange}>
            <NotesTabList>
              {categories?.map((category, index) => (
                  <Tab key={index}>{category}</Tab>
              ))}
            </NotesTabList>
            <TabPanels>
              {categories?.map((category, index) => (
                  <NotesWrapper key={index}>
                    {newList?.map((update, index) => (
                        <NotesContainer key={index}
                                        onClick={(e) => update?.isCompleted ? navigate(`/patchnotes/${update?.id}`) : null}>
                          <NotesPictureContainer src={getImage()}/>
                          <NotesTimeContainer>{formatDate(update.time, "noHour")}
                            <NotesNotFinished>{!update?.isCompleted ? "Devam ediyor" : ""}</NotesNotFinished></NotesTimeContainer>
                          <NotesIdContainer>{searchItem === "NEW" ? "Güncelleme " : "Bakım "}Notu
                            - {update.id}</NotesIdContainer>
                        </NotesContainer>
                    ))}
                  </NotesWrapper>
              ))}
            </TabPanels>
          </NotesTabs>
      )
    } else {
      return (<></>);
    }
  }, [updates, tabIndex]);
};

export default HomePagePatchNotes;
