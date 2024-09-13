import Backdrop from "@mui/material/Backdrop";
import MuiModal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { IoClose } from "react-icons/io5";
import { Box } from "@mui/material";

import "./modal.scss";

type Props = {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  // visible: boolean;
  // hideBackdrop: boolean;
};

const Modal = ({ children, isOpen, handleClose }: Props) => {
  return (
    <MuiModal
    open={isOpen}
    onClose={handleClose}
    closeAfterTransition
    slots={{ backdrop: Backdrop }}
    slotProps={{
      backdrop: {
        timeout: 500,
      },
    }}
    >
      <Fade in={isOpen} >
        <Box className="styled-box">
          <button onClick={handleClose} className="close-btn">
            <IoClose size={32} />
          </button>
          {children}
        </Box>
      </Fade>
    </MuiModal>
  );
};
export default Modal;

