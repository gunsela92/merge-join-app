import React from 'react';
import HomePageButtons from "../Components/HomePageButtons";
import {Route, Routes} from "react-router-dom";

const Routing = () => {
  return (
      <Routes>
        <Route path={'/'} element={<HomePageButtons />} />
        <Route path={'/home'} element={<HomePageButtons />} />
        <Route path={'/index'} element={<HomePageButtons />} />
        <Route path="patchnote">
          <Route path=":patchId" element={<ProfilePage />} />
        </Route>
      </Routes>
  );
};

export default Routing;
