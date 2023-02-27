import React from "react";
import "../styles/classroom.css"

function Classroom(classroomInformations) {
    
    return (
        <div className="classroom-container">
            <h3 className="classroom-text">Titre du cours: {classroomInformations.title}</h3>
            <h3 className="classroom-text">Discipline: {classroomInformations.discipline}</h3>
            <h3 className="classroom-text">Donné à la {classroomInformations.session}</h3>
            <button className="classroom-button">Plus d'informations</button>
        </div>
    )
}

export default Classroom;