import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenuPage from "./components/MainMenuPage";
import TeachersPage from "./components/TeachersPage";
import ClassroomPage from "./components/ClassroomsPage"
import UpperNavBar from './components/UpperNavBar';
import NoPage from './components/NoPage';

function App() {
  const teacherList = [
    {
      pictureURL: "",
      firstName: "Jean",
      lastName: "Richard",
      hiredDate: "2022-02-23",
      taughtClassroomsList: ["math", "educ", "whatever"]
    },
  ];
  //const classroomList = [];
  const [teacherListRef, setTeacherListRef] = useState(teacherList);
  
  return (
    <BrowserRouter>
      <UpperNavBar />
      <Routes>
          <Route path="menu-principal" element={<MainMenuPage />} />
          <Route path="profs" element={<TeachersPage teacherList={teacherListRef} addTeacherFunc={setTeacherListRef} />} />
          <Route path="cours" element={<ClassroomPage />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
