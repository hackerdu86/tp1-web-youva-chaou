import "../styles/card.css";

function Card(teacherInformations) {
  return (
    <div className="card">
      <img
        src={teacherInformations.pictureURL}
        alt="Professeur"
        className="card-image"
      ></img>
      <h3 className="card-text">
        {teacherInformations.firstName} {teacherInformations.lastName}
      </h3>
      <h3 className="card-text">
        Date d'embauche: {teacherInformations.hiredDate}
      </h3>
      <h2 className="card-text">Liste de cours: </h2>
      <h3 className="card-text">
        {teacherInformations.taughtClassroomsList.map((classroom) => {
          return (classroom +=
            teacherInformations.taughtClassroomsList.indexOf(classroom) <
            teacherInformations.taughtClassroomsList.length - 1
              ? ", "
              : "");
        })}
      </h3>
    </div>
  );
}

export default Card;
