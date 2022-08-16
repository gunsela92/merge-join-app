import React from 'react';
import HomePageButtons from "../Components/HomePageButtons";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PatchNotes from "../Components/PatchNotes/index"

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePageButtons/>}/>
        <Route path={'/home'} element={<HomePageButtons/>}/>
        <Route path={'/index'} element={<HomePageButtons/>}/>
        <Route path="/patchnotes">
          <Route path=":patchId" element={<PatchNotes/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
