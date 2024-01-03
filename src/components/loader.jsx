import { Modal } from "flowbite-react";
import PropTypes from "prop-types";
import BotIcon from "src/assets/icons/bot.svg?react";

const Loader = ({ openModal, setOpenModal }) => {
  return (
    <>
      <Modal show={openModal} onClose={() => setOpenModal(false)} size={"2xl"}>
        <Modal.Body>
          <div className="h-96">
            <div className="h-full flex justify-center items-center">
              <div className="flex justify-center items-center">
                <h1 className="text-lg font-semibold text-center">Resume.AI</h1>
                <span className="inline-block pb-1 ms-1">
                  <BotIcon className="w-6 h-6" />
                </span>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

Loader.propTypes = {
  openModal: PropTypes.bool,
  setOpenModal: PropTypes.func,
};

export default Loader;
