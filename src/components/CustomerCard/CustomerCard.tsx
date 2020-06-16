import React from "react";
import { Customer } from "../../types/Customer";

interface Props {
  customer: Customer;
  deleteCustomer: (value: string) => void;
  openModal: (value: Customer) => void;
}

const convertDate = (dob: Date | Date[]) => {
  return dob.toLocaleString().split(",")[0];
};

// customer card
export const CustomerCard: React.FC<Props> = (props) => {
  const { customer, deleteCustomer, openModal } = props;

  const removeCustomer = () => {
    deleteCustomer(customer.id);
  };

  const onOpenEditModal = () => {
    openModal(customer);
  };

  return (
    <div className="accordion-row accordion-row-completed">
      <div className="flex-table flex-table-row">
        <div className="flex-row">
          <span className="customer-name">{customer.firstName}</span>
        </div>
        <div className="flex-row">
          <span className="customer-name">{customer.lastName}</span>
        </div>
        <div className="flex-row">
          <span className="customer-name">{customer.phoneNumber}</span>
        </div>
        <div className="flex-row">
          <span className="customer-name">{convertDate(customer.dob)}</span>
        </div>

        <div className="flex-row-action">
          <button onClick={removeCustomer} className="add-button">
            <i className="material-icons">delete_outline</i>
          </button>
          <button onClick={onOpenEditModal} className="add-button">
            <i className="material-icons">edit</i>
          </button>
        </div>
      </div>
    </div>
  );
};
