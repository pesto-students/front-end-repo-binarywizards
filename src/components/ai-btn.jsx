import StarsIcon from "src/assets/icons/stars.svg?react";
import PropTypes from "prop-types";

const AiButton = ({ onClick, ...rest }) => {
  return (
    <button
      type="button"
      className="flex bg-accent text-white p-1 rounded-lg overflow-hidden mx-2"
      onClick={onClick}
      {...rest}
    >
      <StarsIcon className="w-6 h-6" />
    </button>
  );
};

AiButton.propTypes = {
  onClick: PropTypes.func,
};

export default AiButton;
