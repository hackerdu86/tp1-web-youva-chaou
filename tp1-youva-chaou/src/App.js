import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenuPage from "./components/MainMenuPage";
import TeachersPage from "./components/TeachersPage";
import ClassroomPage from "./components/ClassroomsPage";
import ClassroomDetailsPage from "./components/ClassroomDetailsPage";
import UpperNavBar from "./components/UpperNavBar";
import NoPage from "./components/NoPage";

function App() {
  function getAllTeacherNames(teacherList) {
    return teacherList.map((teacherObj) => {
      return teacherObj["firstName"] + " " + teacherObj["lastName"];
    });
  }

  const teacherList = [
    {
      pictureURL: "",
      firstName: "Jean",
      lastName: "Richard",
      hiredDate: "23/02/2023",
      taughtClassroomsList: ["math", "educ", "whatever"],
    },
    {
      pictureURL: "",
      firstName: "Michel",
      lastName: "Desormais",
      hiredDate: "23/02/2023",
      taughtClassroomsList: ["math", "educ", "whatever"],
    },
    {
      pictureURL: "",
      firstName: "Ayoub",
      lastName: "Kesri",
      hiredDate: "23/02/2023",
      taughtClassroomsList: ["math", "educ", "whatever"],
    },
  ];
  const classroomList = [
    {
      title: "Math",
      discipline: "Bs",
      session: "Session Hiver 2023",
      startingDate: "12/02/2023",
      endingDate: "",
      maxStudents: 5,
      teacherName: "",
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
    {
      title: "Programmation",
      discipline: "Informatique",
      session: "Session Hiver 2022",
      startingDate: "15/05/2021",
      endingDate: "",
      maxStudents: 5,
      teacherName: "",
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
  ];
  const [teacherListRef, setTeacherListRef] = useState(teacherList);
  const [classroomListRef, setClassroomList] = useState(classroomList);
  const [chosenClassroomRef, setChosenClassroomRef] = useState("");

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
        <Route
          path="cours"
          element={
            <ClassroomPage
              classroomList={classroomListRef}
              addClassroomFunc={setClassroomList}
              setChosenClassroomFunc={setChosenClassroomRef}
              teacherNamesList={getAllTeacherNames(teacherListRef)}
            />
          }
        />
        <Route
          path="cours/detail-cours"
          element={<ClassroomDetailsPage title={chosenClassroomRef["title"]} />}
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
