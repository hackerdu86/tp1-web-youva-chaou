import logoMontmorency from "../ressources/logo-montmorency.png";
import "../styles/main-menu.css";

function MainMenuPage() {
  return (
    <div>
      <img
        src={logoMontmorency}
        alt="logo de montmorency"
        className="logo"
      ></img>
      <div>
        <h1>Youva Chaou - TP1</h1>
        <h2>Description générale des fonctionnalitées:</h2>
        <ul>
          <li>Ajouter des professeurs</li>
          <li>Ajouter des cours</li>
          <li>Lier un cours à un professeur existant</li>
          <li>Lier un cours à un nouveau professeur</li>
          <li>Ajouter des étudiants dans un cours</li>
          <li>Filtrer les cours par session</li>
          <li>Afficher une page détaillé d'un cours en particulier</li>
        </ul>
      </div>
    </div>
  );
}

export default MainMenuPage;
