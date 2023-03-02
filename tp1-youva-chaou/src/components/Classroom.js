import React from "react";
import { Link } from "react-router-dom";
import "../styles/classroom.css";

function Classroom(classroomInformations) {
  return (
    <div className="classroom-container">
      <h3 className="classroom-text">
        Titre du cours: {classroomInformations.title}
      </h3>
      <h3 className="classroom-text">
        Discipline: {classroomInformations.discipline}
      </h3>
      <h3 className="classroom-text">
        Donné à la {classroomInformations.session}
      </h3>
      <h3 className="classroom-text">
        Professeur: {classroomInformations.teacherName}
      </h3>
      <Link to="detail-cours">
        <button className="classroom-button" onClick={classroomInformations.onClickHandler} ref={classroomInformations.buttonRef}>Plus d'informations</button>
      </Link>
    </div>
  );
}

export default Classroom;
