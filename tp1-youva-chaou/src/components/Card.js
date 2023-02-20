import "../styles/card.css"

function Card(teacherInformations) {
    return (
        <div className="card">  
            <img src={teacherInformations.pictureURL} alt="Professeur"></img>
            <h3 className="card-text">{teacherInformations.firstName}, {teacherInformations.lastName}</h3>
            <h2 className="card-text">Liste de cours: </h2>
            <p className="card-text">{teacherInformations.taughtClassroomsList.map((classroom) => {
                return classroom += ", ";
            })}</p>
        </div>
    );
}

export default Card;