import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {
  BackButton,
  IDContainer,
  LogoContainer,
  NewsContainer,
  NotesContainer,
  PatchContainer,
  TimeContainer
} from "./style";
import MergeRPIcon from "../../assets/icons/MergeRp.png"
import {formatDate} from "../../Utils/dateFormatter";

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

  function createMarkup(text) {
    return {__html: text};
  }

  return (
      <PatchContainer>
        <NotesContainer>
          <LogoContainer src={MergeRPIcon}/>
          <IDContainer>
              <span>
                Güncelleme {inno?.id}
              </span>
            <span>
                {formatDate(inno?.time, "noHour")}
              </span>
          </IDContainer>
          <NewsContainer dangerouslySetInnerHTML={createMarkup(inno?.yenilik)}/>
          <TimeContainer>
            <BackButton onClick={(e) => navigate("/")} variant='ghost'>Geri</BackButton>
          </TimeContainer>
          </NotesContainer>
      </PatchContainer>
  );
};

export default PatchNotes;
