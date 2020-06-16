import React from "react";
//@material-ui/core icons
import Clear from "@material-ui/icons/Clear";
import DatePicker from "react-date-picker";

import { useForm } from "../../hooks/useForm";
import { Customer } from "../../types/Customer";
// styles
import "../../assets/components/modal.scss";

interface Props {
  isEdit: boolean;
  handleModal: (value: boolean) => void;
  onSubmitForm: (values: Customer) => void;
  selectedCustomer: Customer;
  onEditCustomer: (values: Customer) => void;
}

// this will list down all the customers added
export const Modal: React.FC<Props> = ({
  handleModal,
  onSubmitForm,
  isEdit,
  selectedCustomer,
  onEditCustomer,
}) => {
  // custom hook for form data
  const { values, handleChange, setDateValue } = useForm(selectedCustomer);

  const handleSubmit = () => {
    onSubmitForm(values);
  };

  const editCustomer = () => {
    onEditCustomer(values);
  };

  const closeModal = () => {
    handleModal(false);
  };
  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <div className="modal-header">
          <div className="modal-title-wrapper">
            <div>{isEdit ? "Edit" : "Add"} Customer</div>
          </div>
          <div className="icon-wrapper">
            <Clear onClick={closeModal} className="clear-icon" />
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
          {!isEdit ? (
            <button onClick={handleSubmit} className="add-button">
              Add Customer
            </button>
          ) : (
            <button onClick={editCustomer} className="add-button">
              Edit Customer
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
