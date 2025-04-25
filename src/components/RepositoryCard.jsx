import "../styles/repositoryCard.css";

const RepositoryCard = ({ name, language, desc }) => {
  return (
    <div className="repository-card">
      <h2>{name}</h2>
      <p>{desc}</p>
      <p>{language}</p>
    </div>
  );
};

export default RepositoryCard;
