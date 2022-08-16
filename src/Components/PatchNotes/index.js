import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {IDContainer, LogoContainer, NewsContainer, NotesContainer, PatchContainer, TimeContainer} from "./style";
import MergeRPIcon from "../../assets/icons/MergeRp.png"
import {formatDate} from "../../Utils/dateFormatter";

const PatchNotes = () => {
  const [post, setPost] = useState("");
  const [inno, setInno] = useState([]);
  let {patchId} = useParams();

  const fuc = () => {
    setPost(patchId)
  }

  useEffect(() => {
    fuc()
    GetUpdate()
  }, []);

  const GetUpdate = async () => {
    try {
      const res = await axios.get("https://apiv1.mergeroleplay.com/tracer/announce");
      if (res?.data) {
        console.log("eşleşti")
        setInno(res?.data)
        console.log(res?.data)
      } else {
        console.log("başarısız")
      }
    } catch (e) {
      return e;
    }
  }

  return (
    <PatchContainer>
      {inno.map(val => (
        <div>
          {val?.id == patchId ?
            <NotesContainer>
              <LogoContainer src={MergeRPIcon}/>
              <IDContainer>
                Güncelleme {val.id}
              </IDContainer>
              <NewsContainer>
                {val.yenilik}
              </NewsContainer>
              <TimeContainer>
                {formatDate(val.time, "noHour")}
              </TimeContainer>
            </NotesContainer>
            :
            ""}
        </div>
      ))}
    </PatchContainer>
  );
};

export default PatchNotes;
