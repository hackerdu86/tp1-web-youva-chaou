import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainMenuPage from "./components/MainMenuPage";
import TeachersPage from "./components/TeachersPage";
import ClassroomPage from "./components/ClassroomsPage";
import ClassroomDetailsPage from "./components/ClassroomDetailsPage";
import UpperNavBar from "./components/UpperNavBar";
import NoPage from "./components/NoPage";

function App() {

  const teacherList = [
    {
      pictureURL: "https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg",
      firstName: "The",
      lastName: "Rock",
      hiredDate: "23/02/2023",
      taughtClassroomsList: ["Comment devenir un mâle alpha"],
    },
    {
      pictureURL: "https://upload.wikimedia.org/wikipedia/commons/6/60/Xi_Jinping_portrait_2019_%28cropped%29.jpg",
      firstName: "Xi",
      lastName: "Jinping",
      hiredDate: "05/06/2015",
      taughtClassroomsList: [],
    },
    {
      pictureURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Light_from_Death_Note.jpg/220px-Light_from_Death_Note.jpg",
      firstName: "Light",
      lastName: "Yagami",
      hiredDate: "18/04/1996",
      taughtClassroomsList: [],
    },
  ];
  const classroomList = [
    {
      title: "Comment devenir un mâle alpha",
      discipline: "Gigachadmisme",
      session: "Session Hiver 2023",
      startingDate: "06/01/2023",
      endingDate: "15/03/2023",
      maxStudents: 5,
      teacherName: "The Rock",
      studentList: [
        {
          admissionNumber: "2125796",
          firstName: "Jean",
          lastName: "Michel",
        },
        {
          admissionNumber: "2125762",
          firstName: "Larry",
          lastName: "Durocher",
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
  const [classroomListRef, setClassroomListRef] = useState(classroomList);
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
              teacherList={teacherListRef}
              addClassroomFunc={setClassroomListRef}
              setChosenClassroomFunc={setChosenClassroomRef}
              setTeacherListFunc={setTeacherListRef}
            />
          }
        />
        <Route
          path="cours/detail-cours"
          element={
            <ClassroomDetailsPage
              title={chosenClassroomRef["title"]}
              discipline={chosenClassroomRef["discipline"]}
              startingDate={chosenClassroomRef["startingDate"]}
              endingDate={chosenClassroomRef["endingDate"]}
              session={chosenClassroomRef["session"]}
              maxStudents={chosenClassroomRef["maxStudents"]}
              teacherName={chosenClassroomRef["teacherName"]}
              studentList={chosenClassroomRef["studentList"]}
              classroomList={classroomListRef}
              chosenClassroom={chosenClassroomRef}
              setClassroomListFunc={setClassroomListRef}
              setChosenClassroomFunc={setChosenClassroomRef}
            />
          }
        />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
