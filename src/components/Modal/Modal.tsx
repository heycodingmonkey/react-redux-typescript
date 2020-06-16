import React from "react";
//@material-ui/core icons
import Clear from "@material-ui/icons/Clear";
import DatePicker from "react-date-picker";

import { useForm, Customer } from "../../hooks/useForm";
// styles
import "../../assets/components/modal.scss";

interface Props {
  open?: boolean;
  handleModal: () => void;
  onSubmitForm: (values: Customer) => void;
}

// this will list down all the customers added
export const Modal: React.FC<Props> = ({ handleModal, onSubmitForm }) => {
  const { values, handleChange, setDateValue } = useForm();

  const handleSubmit = () => {
    // no validations
    // pass it to parent component
    onSubmitForm(values);
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
            <div className="field-wrapper">
              <input
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                className="form-input"
                type="text"
                placeholder="First Name"
              />
            </div>
            <div className="field-wrapper">
              <input
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                className="form-input"
                type="text"
                placeholder="Second Name"
              />
            </div>
            <div className="field-wrapper">
              <input
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
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
                value={values.dob}
              />
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSubmit} className="add-button">
            Add Customer
          </button>
        </div>
      </div>
    </div>
  );
};
