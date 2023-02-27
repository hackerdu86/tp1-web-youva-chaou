import React, { useState } from "react";
import Classroom from "./Classroom";
import "../styles/classroom.css";


const selectRef = React.createRef();

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
      session: props.sessionConvertingFunction(startingDate),
      startingDate: startingDate,
      endingDate: endingDate,
      studentList: studentList,
    };
  }

  function handleOnChangeSelect() {
    let session = selectRef.current.value;
    setClassroomBySessionListRef(classroomListBySession(session, props.classroomList));
  }
  function classroomListBySession(session, classroomList) {
    let classroomListBySession = [];
    classroomList.forEach((classroom) => {
        if (classroom["session"] === session) {
            classroomListBySession.push(classroom);
        }
    })
    return classroomListBySession;
  }

  let classroomsListBySession = classroomListBySession("Session Hiver 2023", props.classroomList);

  const [classroomBySessionListRef, setClassroomBySessionListRef] = useState(classroomsListBySession);

  return (
    <div>
      <h1>Page de Cours</h1>
      <label htmlFor="session">Filtrer par session: </label>
      <select name="session" id="session" onChange={handleOnChangeSelect} ref={selectRef}>
        <option value="Session Hiver 2023">Session Hiver 2023</option>
        <option value="Session Automne 2022">Session Automne 2022</option>
        <option value="Session Hiver 2022">Session Hiver 2022</option>
        <option value="Session Automne 2021">Session Automne 2021</option>
      </select>

      <div>
        {classroomBySessionListRef.map((classroom) => {
          return (
            <Classroom
              title={classroom["title"]}
              discipline={classroom["discipline"]}
              session={classroom["session"]}
            />
          );
        })}
      </div>

      <form>

      </form>
    </div>
  );
}

export default ClassroomsPage;
