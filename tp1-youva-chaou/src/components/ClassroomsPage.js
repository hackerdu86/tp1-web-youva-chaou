import React from "react";
import Classroom from "./Classroom";
import "../styles/classroom.css";

function ClassroomsPage(props) {
  function fromClassroomInfoToJson(
    title,
    discipline,
    session,
    startingDate,
    endingDate,
    studentList
  ) {
    return {
      title: title,
      discipline: discipline,
      session: session,
      startingDate: startingDate,
      endingDate: endingDate,
      studentList: studentList,
    };
  }

  function handleOnChangeSelect() {}

  return (
    <div>
      <h1>Page de Cours</h1>
      <label for="session">Choisir une session: </label>
      <select name="session" id="session" onChange={handleOnChangeSelect}>
        <option value="Session Hiver 2023">Session Hiver 2023</option>
        <option value="Session Automne 2022">Session Automne 2022</option>
        <option value="Session Hiver 2022">Session Hiver 2022</option>
        <option value="Session Automne 2021">Session Automne 2021</option>
      </select>

      <div>
        {props.classroomList.map((classroom) => {
          return (
            <Classroom
              title={classroom["title"]}
              discipline={classroom["discipline"]}
              session={classroom["classroom"]}
            />
          );
        })}
      </div>

      <form></form>
    </div>
  );
}

export default ClassroomsPage;
