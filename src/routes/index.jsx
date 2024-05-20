import React from "react";
import { Route, Routes } from "react-router-dom";
import MainPages from "../pages/main_page";
import BuildingsPages from "../pages/buildings";
import SecondaryPages from "../pages/secondary";
import RentPages from "../pages/rent";
import LandPages from "../pages/land";
import ObjectPages from "../pages/object";
import ContactPages from "../pages/contacts";
import NewBuildingsPages from "../pages/new_buildings";


function RouterComponent() {
   return(
      <Routes>
         <Route path={"/"} element={<MainPages/>} />
         <Route path={"/newbuildingis"} element={<NewBuildingsPages/>} />
         <Route path={"/buildings"} element={<BuildingsPages/>} />
         <Route path={"/secondary"} element={<SecondaryPages/>} />
         <Route path={"/rent"} element={<RentPages/>} />
         <Route path={"/land"} element={<LandPages/>} />
         <Route path={"/object"} element={<ObjectPages/>} />
         <Route path={"/contact"} element={<ContactPages/>} />
      </Routes>
   )
}

export default RouterComponent