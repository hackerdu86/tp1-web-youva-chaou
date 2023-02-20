import React from 'react';
import Card from "./Card";
import "../styles/forms.css";

function TeachersPage(props) {
    const pRef = React.createRef(),
    firstNameInputRef = React.createRef(),
    lastNameInputRef = React.createRef(),
    dateInputRef = React.createRef(),
    teacherPictureFileRef = React.createRef();

    function fromTeacherInfoToJson(pictureURL, firstName, lastName, hiredDate) {
        return {
            pictureURL: pictureURL,
            firstName: firstName,
            lastName: lastName,
            hiredDate: hiredDate,
            taughtClassroomsList: []
        };
    }
    function fromFileToPromiseURL(file) {
        return new Promise((resolve) => {
            const objectURL = URL.createObjectURL(file);
            resolve(objectURL);
        });   
    }
    function handleClickButton() {
        let errorMessage = "Tous les champs doivent être remplis pour ajouter un professeur!";
        let firstName = firstNameInputRef.current.value,
        lastName = lastNameInputRef.current.value;
        pRef.current.className = "error";

        if (firstName === "" || lastName === "" || teacherPictureFileRef.current.files.length === 0) {
            pRef.current.innerHTML = errorMessage;
        } else {
            let selectedFileNameExtension = teacherPictureFileRef.current.files[0].name.split(".")[1];
            if (selectedFileNameExtension !== "png" && selectedFileNameExtension !== "jpg") {
                console.log(selectedFileNameExtension);
                pRef.current.innerHTML = "Le fichier choisi ne peut être qu'une image!";
            } else {
                fromFileToPromiseURL(teacherPictureFileRef.current.files[0]).then((response) => {
                    console.log(response);
                    pRef.current.className = "succes";
                    pRef.current.innerHTML = "Le professeur a été ajouté avec succès";
                    props.addTeacherFunc([...props.teacherList, fromTeacherInfoToJson(response, firstName, lastName, dateInputRef.current.value)]);
                }      
            );
        }
    }
    console.log(firstName)
  }

  return (
    <div>
      <h1>Page des professeurs</h1>
      {props.teacherList.map((teacher) => {
        return (
          <Card
            pictureURL={teacher["pictureURL"]}
            firstName={teacher["firstName"]}
            lastName={teacher["lastName"]}
            taughtClassroomsList={teacher["taughtClassroomsList"]}
          />
        );
      })}
      <form>
        <h2>Formulaire d'inscription de professeur</h2>
        <label htmlFor="fname" className="text">
          Nom de Famille:{" "}
        </label>
        <input type="text" id="fname" name="fname" ref={firstNameInputRef} readOnly={false}/>
        <br></br>
        <label htmlFor="lname" className="text">
          Prénom:{" "}
        </label>
        <input type="text" id="lname" name="lname" ref={lastNameInputRef} />
        <br></br>
        <label htmlFor="hiredDate" className="text">
          Date d'embauche:{" "}
        </label>
        <input
          type="date"
          id="hiredDate"
          name="hiredDate"
          value="2023-02-20"
          ref={dateInputRef}
        ></input>
        <br></br>
        <label htmlFor="teacherPictureFile" className="text">
            Choisir une photo:{" "}
        </label>
        <input type="file" id="teacherPictureFile" name="teacherPictureFile" ref={teacherPictureFileRef}/>
        <br></br>
        <button type="button" className="button" onClick={handleClickButton}>
          Ajouter un professeur
        </button>
        <p ref={pRef} className="error"></p>
      </form>
    </div>
  );
}

export default TeachersPage;
