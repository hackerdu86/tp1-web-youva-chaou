import React from "react";
import "../styles/classroom-details.css";
import "../styles/forms.css";
import Student from "./Student";

function ClassroomDetailsPage(classroomInformations) {
  function isStudentAlreadyIn(admissionNumber) {
    let students = getAllStudents(),
      isAlreadyIn = false;
    students.forEach((student) => {
      console.log(student["admissionNumber"] + " === " + admissionNumber);
      if (student["admissionNumber"] === admissionNumber) {
        isAlreadyIn = true;
        return;
      }
    });
    return isAlreadyIn;
  }
  function getAllStudents() {
    let students = [];
    classroomInformations["studentList"].forEach((student) => {
      students.push(student);
    });
    return students;
  }
  function fromStudentInfoToJson(firstName, lastName, admissionNumber) {
    return {
      firstName: firstName,
      lastName: lastName,
      admissionNumber: admissionNumber,
    };
  }

  //Events
  function handleClickButton() {
    pRef.current.className = "error";
    if (getAllStudents().length < classroom["maxStudents"]) {
      let firstName = firstNameInputRef.current.value,
        lastName = lastNameInputRef.current.value,
        admissionNumber = admissionNumberInputRef.current.value;
      if (firstName === "" || lastName === "" || admissionNumber === "") {
        pRef.current.innerHTML =
          "Tous les champs doivent être remplit pour pouvoir ajouter un étudiant";
      } else {
        if (!isStudentAlreadyIn(admissionNumber)) {
          const studentToAdd = fromStudentInfoToJson(
            firstName,
            lastName,
            admissionNumber
          );
          let classroomToUpdate = { ...classroom };
          classroomToUpdate["studentList"] = [
            ...classroomToUpdate["studentList"],
            studentToAdd,
          ];
          classroomInformations.setChosenClassroomFunc(classroomToUpdate);
          let newClassroomList = [...classroomInformations.classroomList];
          newClassroomList[
            newClassroomList.indexOf(classroomInformations.chosenClassroom)
          ] = classroomToUpdate;
          classroomInformations.setClassroomListFunc(newClassroomList);
          pRef.current.className = "succes";
          pRef.current.innerHTML = "L'étudiant a été ajouté avec succès !";
        } else {
          pRef.current.innerHTML =
            "Il n'est pas possible d'ajouter un étudiant deux fois !";
        }
      }
    } else {
      pRef.current.innerHTML =
        "Le nombre maximum d'étudiant a été atteint ! (" +
        classroom["maxStudents"] +
        ")";
    }
  }

  const classroom = {
    title: classroomInformations.title,
    discipline: classroomInformations.discipline,
    session: classroomInformations.session,
    startingDate: classroomInformations.startingDate,
    endingDate: classroomInformations.endingDate,
    maxStudents: classroomInformations.maxStudents,
    teacherName: classroomInformations.teacherName,
    studentList: classroomInformations.studentList,
  };

  const pRef = React.createRef(),
    firstNameInputRef = React.createRef(),
    lastNameInputRef = React.createRef(),
    admissionNumberInputRef = React.createRef();

  console.log(classroom);

  return (
    <div>
      <h1>Page du cours de {classroom["title"]}</h1>
      <h2>Discipline: {classroom["discipline"]}</h2>
      <h2>Enseignant: {classroom["teacherName"]}</h2>
      <h2>
        Enseigné à la {classroom["session"]} du {classroom["startingDate"]} au{" "}
        {classroom["endingDate"]}.
      </h2>
      <h2>
        Nombre maximum d'étudiant qui peuvent être inscrit au cours:{" "}
        {classroom["maxStudents"]}
      </h2>
      <h3>Liste des étudiants:</h3>
      {getAllStudents().map((student) => {
        return (
          <Student
            className={
              getAllStudents().indexOf(student) % 2 === 0 ? "" : "second"
            }
            firstName={student["firstName"]}
            lastName={student["lastName"]}
            admissionNumber={student["admissionNumber"]}
          />
        );
      })}
      <form>
        <h2>
          Formulaire d'inscription d'étudiant au cours de {classroom["title"]}
        </h2>
        <label htmlFor="firstName" className="text">
          Nom de l'étudiant:{" "}
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          ref={firstNameInputRef}
          readOnly={false}
        />
        <br></br>
        <label htmlFor="lastName" className="text">
          Prénom de l'étudiant:{" "}
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          ref={lastNameInputRef}
          readOnly={false}
        />
        <br></br>
        <label htmlFor="admissionNumber" className="text">
          Numéro d'admission de l'étudiant{" "}
        </label>
        <input
          type="text"
          id="admissionNumber"
          name="admissionNumber"
          ref={admissionNumberInputRef}
        />
        <br></br>
        <button type="button" className="button" onClick={handleClickButton}>
          Ajouter l'étudiant
        </button>
        <p ref={pRef} className="error"></p>
      </form>
    </div>
  );
}

export default ClassroomDetailsPage;
