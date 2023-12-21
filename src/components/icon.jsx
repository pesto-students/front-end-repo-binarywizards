import PropTypes from "prop-types";

const Icon = ({ icon, className, alt }) => {
  return <img src={icon} alt={alt || "icon"} className={className} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string,
};

export default Icon;
