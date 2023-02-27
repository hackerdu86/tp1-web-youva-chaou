import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenuPage from "./components/MainMenuPage";
import TeachersPage from "./components/TeachersPage";
import ClassroomPage from "./components/ClassroomsPage";
import UpperNavBar from "./components/UpperNavBar";
import NoPage from "./components/NoPage";

function App() {
  const teacherList = [
    {
      pictureURL: "",
      firstName: "Jean",
      lastName: "Richard",
      hiredDate: "23/02/2023",
      taughtClassroomsList: ["math", "educ", "whatever"],
    },
  ];
  const classroomList = [
    {
      title: "",
      discipline: "",
      session: "",
      startingDate: "",
      endingDate: "",
      studentList: [
        {
          admissionNumber: 0,
          firstName: "",
          lastName: "",
        },
        {
          admissionNumber: 0,
          firstName: "",
          lastName: "",
        },
      ],
    },
    {},
  ];
  const [teacherListRef, setTeacherListRef] = useState(teacherList);
  const [classroomListRef, setClassroomList] = useState(classroomList);

  function determinateSessionByDate(startingDate) {
    const autumn2021 = "22/08/2021", winter2022 = "23/01/2022",  autumn2022 = "22/08/2022", winter2023 = "23/01/2023";
    let session = "Session ", parsedStaringDate = Date.parse(startingDate);
    if (startingDate >= Date.parse(winter2023)) {
        session += "Hiver 2023";
    } else if (startingDate >= Date.parse(autumn2022)) {
        session += "Automne 2022";
    } else if (startingDate >= Date.parse(winter2022)) {
        session += "Hiver 2022";
    } else if (startingDate >= Date.parse(autumn2021)) {
        session += "Automne 2021";
    }
    return session
}

  return (
    <BrowserRouter>
      <UpperNavBar />
      <Routes>
        <Route path="menu-principal" element={<MainMenuPage />} />
        <Route
          path="profs"
          element={
            <TeachersPage
              teacherList={teacherListRef}
              addTeacherFunc={setTeacherListRef}
            />
          }
        />
        <Route path="cours" element={<ClassroomPage 
          classroomList={classroomListRef}
        />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
