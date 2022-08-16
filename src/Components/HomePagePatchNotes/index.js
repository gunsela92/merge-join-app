import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {
  NotesContainer,
  NotesIdContainer,
  NotesPictureContainer,
  NotesTimeContainer,
  NotesWrapper
} from "./style";
import f1 from "../../assets/icons/f1example.jpg"
import {Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import {formatDate} from "../../Utils/dateFormatter";

const HomePagePatchNotes = () => {
  const [updates, setUpdates] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    PatchNotes();
  }, []);

  const PatchNotes = async () => {
    try {
      const res = await axios.get("https://apiv1.mergeroleplay.com/tracer/announce");
      if (res?.data) {
        console.log(res?.data)
        setUpdates(res?.data)
      }
    } catch (e) {
      return e;
    }
  }

  return (
    <NotesWrapper>
      <Tabs>
        <TabList>
          <Tab>Yenilikler Notları</Tab>
          <Tab>Bakım Notları</Tab>
        </TabList>
        <TabPanels>

          <TabPanel>
            {updates.map(val => (
              <>
                {val.isCompleted === 1 && <NotesContainer onClick={(e) => navigate(`/patchnotes/${val?.id}`)}>
                  <NotesPictureContainer src={f1}/>
                  <NotesTimeContainer>{formatDate(val.time, "noHour")}</NotesTimeContainer>
                  <NotesIdContainer>Yenilik Notu {val.id}</NotesIdContainer>
                </NotesContainer> }
              </>
            ))}
          </TabPanel>
          <TabPanel>
            {updates.map(val => (
              <>
                {val.isCompleted === 1 ? "" : <div><NotesContainer onClick={(e) => navigate(`/patchnotes/${val?.id}`)}>
                  <NotesPictureContainer src={f1}/>
                  <NotesTimeContainer>{val.time}</NotesTimeContainer>
                  <NotesIdContainer>Bakım Notu {val.id}</NotesIdContainer>
                </NotesContainer></div>}
              </>
            ))}
          </TabPanel>
        </TabPanels>
      </Tabs>

    </NotesWrapper>

  );
};

export default HomePagePatchNotes;
