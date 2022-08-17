import React, {useEffect, useMemo, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {
  NotesContainer,
  NotesIdContainer,
  NotesPictureContainer, NotesTabList,
  NotesTabs,
  NotesTimeContainer,
  NotesWrapper
} from "./style";
import f1 from "../../assets/icons/f1example.jpg"
import {Tab, TabPanels} from '@chakra-ui/react'
import {formatDate} from "../../Utils/dateFormatter";

const HomePagePatchNotes = () => {
  const [updates, setUpdates] = useState([]);
  const navigate = useNavigate();
  const [tabIndex, setTabIndex] = useState(0)

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
      const searchItem = tabIndex === 0 ? 1 : 0;
      const newList = updates?.filter(item => item?.isCompleted === searchItem);
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
                          <NotesPictureContainer src={f1}/>
                          <NotesTimeContainer>{formatDate(update.time, "noHour")}</NotesTimeContainer>
                          <NotesIdContainer>Yenilik Notu {update.id}</NotesIdContainer>
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
