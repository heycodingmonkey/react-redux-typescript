import React from "react";

// components
import { CustomerCard } from "../CustomerCard/CustomerCard";
import { Customer } from "../../types/Customer";
// this will list down all the customers added

interface Props {
  customers: Customer[];
  deleteCustomer: (value: string) => void;
  openModal: (value: Customer) => void;
  searchText: string;
}
export const FlexTableContent: React.FC<Props> = (props) => {
  const { customers, searchText } = props;

  return (
    <div className="scroll-padding">
      {customers.map((customer) => {
        let length = searchText.length;
        let isIncludeFirstName = customer.firstName
          .toLocaleLowerCase()
          .includes(searchText.toLowerCase());
        let isIncludeLastName = customer.lastName
          .toLocaleLowerCase()
          .includes(searchText.toLowerCase());

        if (length >= 1 && (isIncludeFirstName || isIncludeLastName)) {
          return (
            <CustomerCard
              deleteCustomer={props.deleteCustomer}
              openModal={props.openModal}
              customer={customer}
              key={customer.id}
            />
          );
        } else if (length === 0) {
          return (
            <CustomerCard
              deleteCustomer={props.deleteCustomer}
              openModal={props.openModal}
              customer={customer}
              key={customer.id}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
