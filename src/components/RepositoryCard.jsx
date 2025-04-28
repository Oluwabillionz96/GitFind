import Linkify from "linkify-react";
import "../styles/repositoryCard.css";
import { Link } from "react-router-dom";

const RepositoryCard = ({ name, language, desc, url }) => {
  return (
    <div className="repository-card">
      <h2>{name}</h2>
      <p className="desc">
        <Linkify> {desc}</Linkify>
      </p>
      <footer>
        {language && <p className="language">{language}</p>}
        <Link to={url}>
          <button>Visit Repository</button>
        </Link>
      </footer>
    </div>
  );
};

export default RepositoryCard;
