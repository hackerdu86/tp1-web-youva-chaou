import React, { useState } from 'react';
import TeachersPage from "./components/TeachersPage";

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
    <div>
      <TeachersPage teacherList={teacherListRef} addTeacherFunc={setTeacherListRef} />
    </div>
  );
}

export default App;
