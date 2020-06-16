import React from "react";

// components
import { CustomerCard } from "../CustomerCard/CustomerCard";
import { Customer } from "../../types/Customer";
// this will list down all the customers added

interface Props {
  customers: Customer[];
  deleteCustomer: (value: string) => void;
  openModal: (value: Customer) => void;
}
export const FlexTableContent: React.FC<Props> = (props) => {
  const { customers } = props;

  return (
    <div className="scroll-padding">
      {customers.map((customer, key) => {
        return (
          <CustomerCard
            deleteCustomer={props.deleteCustomer}
            openModal={props.openModal}
            customer={customer}
            key={customer.id}
          />
        );
      })}
    </div>
  );
};
