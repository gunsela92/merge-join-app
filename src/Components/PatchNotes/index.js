import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {
  BtnContainer,
  IDContainer,
  LogoContainer,
  NewsContainer,
  NotesContainer,
  PatchContainer,
  TimeContainer
} from "./style";
import MergeRPIcon from "../../assets/icons/MergeRp.png"
import {formatDate} from "../../Utils/dateFormatter";
import { Button, ButtonGroup } from '@chakra-ui/react'

const PatchNotes = () => {
  const [inno, setInno] = useState({});
  let {patchId} = useParams();
  const navigate = useNavigate();

  const getUpdate = async () => {
    try {
      const res = await axios.post("https://apiv1.mergeroleplay.com/tracer/getannouncefromid", {id: parseInt(patchId)});
      if (res?.data && res?.data?.length > 0) {
        setInno(res?.data[0])
      }
    } catch (e) {
      return e;
    }
  }

  useEffect(() => {
    getUpdate()
  }, []);

  return (
      <PatchContainer>
        <div>
          <NotesContainer>
            <LogoContainer src={MergeRPIcon}/>
            <IDContainer>
              Güncelleme {inno?.id}
            </IDContainer>
            <NewsContainer>
              {inno?.yenilik}
            </NewsContainer>
            <TimeContainer>
              <Button onClick={(e) => navigate("/")} colorScheme='white' variant='ghost' >Geri</Button>
              {formatDate(inno?.time, "noHour")}
            </TimeContainer>
          </NotesContainer>
        </div>
      </PatchContainer>
  );
};

export default PatchNotes;
