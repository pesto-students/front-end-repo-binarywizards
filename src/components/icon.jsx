import PropTypes from "prop-types";

const Icon = ({ icon, className }) => {
  return <img src={icon} alt="" className={className} />;
};

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Icon;
