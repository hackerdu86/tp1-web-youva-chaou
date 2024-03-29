import React, { useState } from "react";
import Classroom from "./Classroom";
import "../styles/forms.css";
import "../styles/classroom.css";

function ClassroomsPage(props) {
  function fromClassroomInfoToJson(
    title,
    discipline,
    startingDate,
    endingDate,
    maxStudents,
    teacherName
  ) {
    return {
      title: title,
      discipline: discipline,
      session: "Session Hiver 2023",
      startingDate: startingDate,
      endingDate: endingDate,
      maxStudents: maxStudents,
      teacherName: teacherName,
      studentList: [],
    };
  }
  function createNewTeacher(firstName, lastName, taughtClassroomsList) {
    return {
      pictureURL: "",
      firstName: firstName,
      lastName: lastName,
      hiredDate: "",
      taughtClassroomsList: taughtClassroomsList,
    };
  }
  function classroomListBySession(session, classroomList) {
    let classroomListBySession = [];
    classroomList.forEach((classroom) => {
      if (classroom["session"] === session) {
        classroomListBySession.push(classroom);
      }
    });
    return classroomListBySession;
  }
  function getAllTeacherNames(teacherList) {
    return teacherList.map((teacherObj) => {
      return teacherObj["firstName"] + " " + teacherObj["lastName"];
    });
  }
  function getTeacherListAfterAddingClassroomToTeacher(
    teacherList,
    teacherName,
    titleOfClassroom
  ) {
    let copyList = [...teacherList];
    copyList.forEach((teacher) => {
      let teacherFullName = teacher["firstName"] + " " + teacher["lastName"];
      if (teacherFullName === teacherName) {
        teacher["taughtClassroomsList"] = [
          ...teacher["taughtClassroomsList"],
          titleOfClassroom,
        ];
      }
    });
    return copyList;
  }
  function getTeacherListAfterAddingNewTeacher(
    teacherList,
    teacherName,
    titleOfClassroom
  ) {
    let copyList = [...teacherList];
    copyList.push(
      createNewTeacher(teacherName.split(" ")[0], teacherName.split(" ")[1], [
        titleOfClassroom,
      ])
    );
    return copyList;
  }
  //Events
  function handleOnChangeSelect() {
    let session = selectRef.current.value;
    setClassroomBySessionListRef(
      classroomListBySession(session, props.classroomList)
    );
  }
  function handleClickButton() {
    console.log("Clicked");
    let title = titleInputRef.current.value,
      discipline = disciplineInputRef.current.value,
      numberOfStudents = parseInt(maxStudentsInputRef.current.value),
      choseNonExistingTeacher = choseExistingTeacherInputRef.current.checked;
    pRef.current.className = "error";
    if (
      title === "" ||
      discipline === "" ||
      maxStudentsInputRef.current.value === "" ||
      (choseNonExistingTeacher && newTeacherNameInputRef.current.value === "")
    ) {
      pRef.current.innerHTML =
        "Tous les champs doivent être remplis afin de pouvoir ajouter un cours !";
    } else if (numberOfStudents < 1 || numberOfStudents > 25) {
      pRef.current.innerHTML =
        "Le nombre d'étudiant minimum est de 1 et maximum est de 25 !";
      console.log(numberOfStudents);
    } else {
      pRef.current.className = "succes";
      pRef.current.innerHTML = "Le cours a été ajouté avec succès !";
      let startingDate = startingDateInputRef.current.value,
        endingDate = endingDateInputRef.current.value,
        teacherName = teacherNameInputRef.current.value;
      if (choseNonExistingTeacher) {
        teacherName = newTeacherNameInputRef.current.value;
      }
      const classroomToAdd = fromClassroomInfoToJson(
        title,
        discipline,
        startingDate,
        endingDate,
        numberOfStudents,
        teacherName
      );
      props.addClassroomFunc([...props.classroomList, classroomToAdd]);
      let session = selectRef.current.value;
      setClassroomBySessionListRef(
        classroomListBySession(session, [
          ...props.classroomList,
          classroomToAdd,
        ])
      );
      if (choseNonExistingTeacher) {
        props.setTeacherListFunc(
          getTeacherListAfterAddingNewTeacher(
            props.teacherList,
            classroomToAdd["teacherName"],
            classroomToAdd["title"]
          )
        );
      } else {
        props.setTeacherListFunc(
          getTeacherListAfterAddingClassroomToTeacher(
            props.teacherList,
            classroomToAdd["teacherName"],
            classroomToAdd["title"]
          )
        );
      }
    }
  }
  function onClickHandlerClassroom(event) {
    let i = -2;
    while ((i += 2) < buttonsBindedWithClassroomDictionary.length) {
      if (buttonsBindedWithClassroomDictionary[i].current === event.target) {
        props.setChosenClassroomFunc(
          buttonsBindedWithClassroomDictionary[i + 1]
        );
      }
    }
  }
  function onChangeHandler(event) {
    if (event.target.checked) {
      newTeacherNameInputRef.current.readOnly = false;
      teacherNameInputRef.current.disabled = true;
    } else {
      newTeacherNameInputRef.current.readOnly = true;
      teacherNameInputRef.current.disabled = false;
    }
  }

  const selectRef = React.createRef(),
    titleInputRef = React.createRef(),
    disciplineInputRef = React.createRef(),
    maxStudentsInputRef = React.createRef(),
    startingDateInputRef = React.createRef(),
    endingDateInputRef = React.createRef(),
    teacherNameInputRef = React.createRef(),
    newTeacherNameInputRef = React.createRef(),
    choseExistingTeacherInputRef = React.createRef(),
    pRef = React.createRef();

  let buttonsBindedWithClassroomDictionary = [];

  let classroomsListBySession = classroomListBySession(
    "Session Hiver 2023",
    props.classroomList
  );

  const [classroomBySessionListRef, setClassroomBySessionListRef] = useState(
    classroomsListBySession
  );

  return (
    <div>
      <h1>Page de Cours</h1>
      <label htmlFor="session">Filtrer par session: </label>
      <select
        name="session"
        id="session"
        onChange={handleOnChangeSelect}
        ref={selectRef}
      >
        <option value="Session Hiver 2023">Session Hiver 2023</option>
        <option value="Session Automne 2022">Session Automne 2022</option>
        <option value="Session Hiver 2022">Session Hiver 2022</option>
        <option value="Session Automne 2021">Session Automne 2021</option>
      </select>

      <div>
        {classroomBySessionListRef.map((classroom) => {
          const classroomButtonRef = React.createRef();
          buttonsBindedWithClassroomDictionary.push(classroomButtonRef);
          buttonsBindedWithClassroomDictionary.push(classroom);
          return (
            <Classroom
              title={classroom["title"]}
              discipline={classroom["discipline"]}
              session={classroom["session"]}
              onClickHandler={onClickHandlerClassroom}
              teacherName={classroom["teacherName"]}
              buttonRef={classroomButtonRef}
            />
          );
        })}
      </div>
      <form>
        <h2>Formulaire d'ajout de cours</h2>
        <label htmlFor="title" className="text">
          Titre du cours:{" "}
        </label>
        <input
          type="text"
          id="title"
          name="title"
          ref={titleInputRef}
          readOnly={false}
        />
        <br></br>
        <label htmlFor="discipline" className="text">
          Discipline:{" "}
        </label>
        <input
          type="text"
          id="discipline"
          name="discipline"
          ref={disciplineInputRef}
          readOnly={false}
        />
        <br></br>
        <label htmlFor="maxStudents" className="text">
          Nombre maximum d'étudiant au cours:{" "}
        </label>
        <input
          type="number"
          id="maxStudents"
          name="maxStudents"
          ref={maxStudentsInputRef}
          min="1"
          max="25"
        />
        <br></br>
        <label htmlFor="startingDate" className="text">
          Date de commencement:{" "}
        </label>
        <input
          type="date"
          id="startingDate"
          name="startingDate"
          min="2023-01-01"
          max="2023-06-05"
          ref={startingDateInputRef}
        ></input>
        <br></br>
        <label htmlFor="endingDate" className="text">
          Date de fin:{" "}
        </label>
        <input
          type="date"
          id="endingDate"
          name="endingDate"
          min="2023-01-02"
          max="2023-06-06"
          ref={endingDateInputRef}
        ></input>
        <br></br>
        <input
          type="checkbox"
          id="existingTeacher"
          name="teacherAddingMode"
          value=""
          onChange={onChangeHandler}
          ref={choseExistingTeacherInputRef}
        ></input>
        <label htmlFor="existingTeacher">
          Choisir un professeur non-existant
        </label>
        <br></br>
        <label htmlFor="cars" className="text">
          Choisir un professeur:{" "}
        </label>
        <select name="teacherNames" id="teacherNames" ref={teacherNameInputRef}>
          {getAllTeacherNames(props.teacherList).map((fullName) => {
            return <option>{fullName}</option>;
          })}
        </select>
        <br></br>
        <label htmlFor="teacherName" className="text">
          Nom complet du nouveau professeur {"(nom + prenom) "}
        </label>
        <input
          type="text"
          id="teacherName"
          name="teacherName"
          ref={newTeacherNameInputRef}
          readOnly={true}
        />
        <br></br>
        <button type="button" className="button" onClick={handleClickButton}>
          Ajouter un cours
        </button>
        <p ref={pRef} className="error"></p>
      </form>
    </div>
  );
}

export default ClassroomsPage;
