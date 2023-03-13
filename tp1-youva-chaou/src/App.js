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
      pictureURL:
        "https://i.kym-cdn.com/entries/icons/original/000/037/848/cover2.jpg",
      firstName: "The",
      lastName: "Rock",
      hiredDate: "23/02/2023",
      taughtClassroomsList: ["Comment devenir un mâle alpha", "Comment avoir des pecs comme des montages"],
    },
    {
      pictureURL:
        "https://upload.wikimedia.org/wikipedia/commons/6/60/Xi_Jinping_portrait_2019_%28cropped%29.jpg",
      firstName: "Xi",
      lastName: "Jinping",
      hiredDate: "05/06/2015",
      taughtClassroomsList: ["Comment rester au pouvoir longtemps"],
    },
    {
      pictureURL:
        "https://www.svg.com/img/gallery/why-god-of-war-has-other-games-running-scared/l-intro-1660309295.jpg",
      firstName: "Kratos",
      lastName: "John",
      hiredDate: "25/02/2014",
      taughtClassroomsList: [],
    },
    {
      pictureURL:
        "https://www.leparisien.fr/resizer/QoeWf_OjHJo1qe4cyjtKiX3CktU=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/5G67LGLTUAQX5M73AGWHJSBEE4.jpg",
      firstName: "Sylvain",
      lastName: "Durif",
      hiredDate: "04/08/2013",
      taughtClassroomsList: ["Comment entrer dans la quatrième dimension"],
    },
    {
      pictureURL:
        "https://upload.wikimedia.org/wikipedia/en/thumb/0/0c/Light_from_Death_Note.jpg/220px-Light_from_Death_Note.jpg",
      firstName: "Light",
      lastName: "Yagami",
      hiredDate: "18/04/1996",
      taughtClassroomsList: ["Dominer le monde"],
    }
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
      title: "Comment entrer dans la quatrième dimension",
      discipline: "Métaphysique",
      session: "Session Automne 2022",
      startingDate: "11/11/2022",
      endingDate: "05/15/2023",
      maxStudents: 4,
      teacherName: "Sylvain Durif",
      studentList: [
        {
          admissionNumber: "214569",
          firstName: "Tardif",
          lastName: "Mahmoud",
        },
        {
          admissionNumber: "253214",
          firstName: "Joel",
          lastName: "Miller",
        },
      ],
    },
    {
      title: "Dominer le monde",
      discipline: "Justice",
      session: "Session Automne 2021",
      startingDate: "11/01/2020",
      endingDate: "02/16/2021",
      maxStudents: 5,
      teacherName: "Light Yagami",
      studentList: [
        {
          admissionNumber: "2122332",
          firstName: "Putin",
          lastName: "DeMonpelier",
        },
        {
          admissionNumber: "2136454",
          firstName: "Bassem",
          lastName: "Racrodelizé",
        },
      ],
    },
    {
      title: "Comment rester au pouvoir longtemps",
      discipline: "Psychologie",
      session: "Session Hiver 2022",
      startingDate: "06/01/2022",
      endingDate: "15/03/2022",
      maxStudents: 5,
      teacherName: "Xi Jinping",
      studentList: [
        {
          admissionNumber: "5546852",
          firstName: "Racoour",
          lastName: "Jay",
        },
        {
          admissionNumber: "8754512",
          firstName: "Larry",
          lastName: "Soupeltique",
        },
      ],
    },
    {
      title: "Comment avoir des pecs comme des montages",
      discipline: "Gigachadmisme",
      session: "Session Hiver 2023",
      startingDate: "06/01/2023",
      endingDate: "15/03/2023",
      maxStudents: 3,
      teacherName: "The Rock",
      studentList: [
        {
          admissionNumber: "98955648",
          firstName: "Karim",
          lastName: "Hakimi",
        },
        {
          admissionNumber: "23659855",
          firstName: "Gerard",
          lastName: "Hatif",
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
        <Route path="/" element={<MainMenuPage />} />
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
