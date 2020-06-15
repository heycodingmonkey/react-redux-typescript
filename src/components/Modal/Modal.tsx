import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
//@material-ui/core icons
import Clear from "@material-ui/icons/Clear";
// styles
import "../../assets/components/modal.scss";

interface Props {
  open?: boolean;
  handleModal?: () => void;
}

// this will list down all the customers added
export const Modal: React.FC<Props> = ({ handleModal }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-header">
          <Clear onClick={handleModal} className="clear-icon" />
        </div>
      </div>
    </div>
    // <Dialog className="dialog-sample" open>
    //   <DialogContent>
    //     <Clear onClick={handleModal} className="clear-icon" />
    //     <div className="modal-content"></div>
    //   </DialogContent>
    // </Dialog>
  );
};
