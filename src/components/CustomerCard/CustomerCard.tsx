import React from "react";
import { Customer } from "../../types/Customer";

interface Props {
  customer: Customer;
}

// customer card
export const CustomerCard: React.FC<Props> = (props) => {
  const { customer } = props;

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
          <span className="customer-name">01/05/1993</span>
        </div>
      </div>
    </div>
  );
};
