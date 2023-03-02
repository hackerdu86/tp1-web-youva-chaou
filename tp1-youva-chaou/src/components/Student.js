import React from "react";
import "../styles/students.css"

function Student(studentInformations) {
    return (
        <div className={studentInformations.className}>
            <p>Nom: {studentInformations.firstName}</p>
            <p>Prénom: {studentInformations.lastName}</p>
            <p>Numéro d'admission: {studentInformations.admissionNumber}</p>
        </div>
    )
}

export default Student;