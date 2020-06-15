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
          <div className="modal-title-wrapper">
            <div>Add Customer</div>
          </div>
          <div className="icon-wrapper">
            <Clear onClick={handleModal} className="clear-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
