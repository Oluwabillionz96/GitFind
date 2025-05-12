import "../styles/error.css";

const Error = ({ image, alt, headingText, text }) => {
  return (
    <div className="error">
      <img src={image} alt={alt} />
      <h1>{headingText}</h1>
      <p>{text}</p>
      <button
        onClick={() => {
          window.location.reload();
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default Error;
