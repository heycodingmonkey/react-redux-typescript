import React, { useState } from "react";
//@material-ui/core icons
import Clear from "@material-ui/icons/Clear";
import DatePicker from "react-date-picker";
// styles
import "../../assets/components/modal.scss";

interface Props {
  open?: boolean;
  handleModal?: () => void;
}

// this will list down all the customers added
export const Modal: React.FC<Props> = ({ handleModal }) => {
  const [date, setDate] = useState<Date | Date[]>(new Date());

  const setDateValue = (value: Date | Date[]) => {
    setDate(value);
  };

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
        <div className="modal-content">
          <div className="content-left">
            {" "}
            <div className="field-wrapper">
              <input
                className="form-input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="field-wrapper">
              <input
                className="form-input"
                type="text"
                placeholder="Second Name"
              />
            </div>
            <div className="field-wrapper">
              <input
                className="form-input"
                type="number"
                placeholder="Mobile Number"
              />
            </div>
          </div>
          <div className="content-right">
            <div className="field-wrapper">
              <DatePicker
                onChange={(e) => {
                  setDateValue(e);
                }}
                value={date}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button className="add-button">Add Customer</button>
        </div>
      </div>
    </div>
  );
};
