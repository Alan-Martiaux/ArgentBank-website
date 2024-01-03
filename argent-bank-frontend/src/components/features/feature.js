import PropTypes from "prop-types";
import "../../css/main.css"



function Features({ img, title, content }) {
  return (
    <>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        <img src={img} alt="Chat Icon" className="feature-icon" />
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
      </div>
    </>
  );
}
Features.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
};
export default Features;
